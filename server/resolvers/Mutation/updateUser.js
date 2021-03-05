const { ApolloError } = require("apollo-server-express");
const isEmail = require("isemail");
const bcrypt = require("bcryptjs");
const PhoneNumber = require("awesome-phonenumber");

module.exports.updateUser = async (_, { form }, { dataSources, user }) => {
  try {
    if (!user) return new ApolloError("Не авторизован!");

    let {
      name = user.name,
      surname = user.surname,
      phone = user.phone,
      email = user.email,
      password = user.password,
    } = form;

    if (!isEmail.validate(email)) return new ApolloError("Неверный Email!");
    if (password !== user.password) {
      if (!(await bcrypt.compare(password, user.password))) {
        password = await bcrypt.hash(password, 12);
      }
    }

    const pn = new PhoneNumber(phone, "RU");
    if (!pn.isValid()) return new ApolloError("Неверный формат телефона!");

    const success = await dataSources.userAPI.updateUser({
      _id: user._id,
      name,
      surname,
      phone,
      email,
      password,
    });

    if (success) return success;
    else return new ApolloError("Ошибка обновления пользователя!");
  } catch (e) {
    console.log(e);
    return new ApolloError("Ошибка сервера!");
  }
};
