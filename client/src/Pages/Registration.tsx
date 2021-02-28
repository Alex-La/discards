import React from "react";

import { Back } from "../Icons";
import Logo from "../assets/logo.svg";
import { CssTextField } from "../MUI/CssComponents";
import { NavLink, useHistory } from "react-router-dom";

const Registration: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <div
        style={{ marginLeft: 20, marginTop: 20 }}
        onClick={() => history.goBack()}
      >
        <Back />
      </div>
      <div className="center-wrapper">
        <div className="wrap">
          <img src={Logo} alt="logo" width={200} />
          <p className="subtitle">Регистрация</p>
          <form>
            <CssTextField
              name="email"
              size="small"
              label="Ваше имя"
              variant="outlined"
              fullWidth
            />
            <CssTextField
              name="password"
              size="small"
              label="Эл. почта"
              variant="outlined"
              fullWidth
              style={{ marginTop: 11 }}
            />
            <CssTextField
              name="password"
              size="small"
              label="Пароль"
              variant="outlined"
              type="password"
              fullWidth
              style={{ marginTop: 11 }}
            />
            <CssTextField
              name="password"
              size="small"
              label="Пароль ещё раз"
              variant="outlined"
              type="password"
              fullWidth
              style={{ marginTop: 11 }}
            />

            <button className="btn btn-shadow" style={{ marginTop: 15 }}>
              Зарегистрироваться
            </button>
          </form>

          <p className="bottom-link">
            Нажимая кнопку “Зарегистрироваться” я даю согласие на обработку
            персональных данных, а так же соглашаюсь с{" "}
            <NavLink to="/policy"> политикой конфиденциальности</NavLink>{" "}
            приложения DISCARDS
          </p>
        </div>
      </div>
    </>
  );
};

export default Registration;
