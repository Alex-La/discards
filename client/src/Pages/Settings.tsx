// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import { BottomNavContext } from "../context/BottomNavContext";

import { useMutation } from "@apollo/react-hooks";
import UPDATE_USER_MUTATION from "../graphql/mutations/updateUser";
import ME_QUERY from "../graphql/queries/me";

import { BackArrow } from "../Icons";
import { CssTextField } from "../MUI/CssComponents";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useMessage } from "../hooks/message.hook";

type TForm = {
  name: string | undefined;
  surname: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  password: string | undefined;
  password_repeat: string | undefined;
};

const Settings: React.FC = () => {
  const { setShowNav } = useContext(BottomNavContext);

  useEffect(() => {
    setShowNav(true);
  }, [setShowNav]);

  const [form, setForm] = useState<TForm>({
    name: undefined,
    surname: undefined,
    phone: undefined,
    email: undefined,
    password: undefined,
    password_repeat: undefined,
  });

  const user = useContext(UserContext);
  const history = useHistory();
  const message = useMessage();

  const [update, { data, loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    variables: { form: (({ password_repeat, ...rest }) => rest)(form) },
    update: (cache, { data }) => {
      cache.writeQuery({
        query: ME_QUERY,
        data: { me: data.updateUser },
      });
    },
  });

  useEffect(() => {
    if (error) message({ text: error.message, type: "error" });
  }, [error, message]);

  useEffect(() => {
    if (data && data.updateUser)
      message({ text: "Пользователь обновлён!", type: "success" });
  }, [data, message]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0)
      setForm({ ...form, [e.target.name]: undefined });
    else setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSumbmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.password !== undefined) {
      if (form.password.length < 6)
        return message({ text: "Пароль слишком короткий!", type: "error" });
      if (form.password !== form.password_repeat)
        return message({ text: "Пароли не совпадают!", type: "error" });
    }
    update();
  };

  const logout = () => localStorage.removeItem("token");

  return (
    <div style={{ padding: 20, marginBottom: 70 }}>
      <div onClick={() => history.goBack()}>
        <BackArrow />
      </div>

      <p
        style={{
          fontWeight: 700,
          fontSize: 30,
          lineHeight: "36.57px",
          marginTop: 15,
          color: "#343434",
        }}
      >
        Настройки
      </p>

      <p
        style={{
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "23.8px",
          color: "#5B5B5B",
          marginTop: 4,
        }}
      >
        Изменяйте настройки вашего профиля
      </p>

      <form onSubmit={handleSumbmit} style={{ marginTop: 20 }}>
        <CssTextField
          name="name"
          value={form.name}
          onChange={handleChange}
          variant="outlined"
          size="small"
          label="Имя"
          placeholder={user?.name}
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <CssTextField
          name="surname"
          value={form.surname}
          onChange={handleChange}
          variant="outlined"
          size="small"
          label="Фамилия"
          placeholder={user?.surname}
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <CssTextField
          name="phone"
          value={form.phone}
          onChange={handleChange}
          variant="outlined"
          size="small"
          label="Мобильный телефон"
          placeholder={user?.phone}
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <CssTextField
          name="email"
          value={form.email}
          onChange={handleChange}
          variant="outlined"
          size="small"
          label="Эл. Почта"
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <CssTextField
          name="password"
          value={form.password}
          onChange={handleChange}
          variant="outlined"
          size="small"
          label="Пароль"
          type="password"
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <CssTextField
          name="password_repeat"
          value={form.password_repeat}
          onChange={handleChange}
          variant="outlined"
          size="small"
          label="Пароль еще раз"
          type="password"
          fullWidth
          style={{ marginBottom: 10 }}
        />

        <button
          disabled={loading}
          type="submit"
          className="btn btn-shadow"
          style={{ marginTop: 5 }}
        >
          Сохранить изменения
        </button>
        <button
          className="btn btn-shadow btn-outlined"
          style={{ marginTop: 14 }}
          onClick={logout}
        >
          Выйти из аккаунта
        </button>
      </form>
    </div>
  );
};

export default Settings;
