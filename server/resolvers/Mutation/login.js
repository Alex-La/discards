const isEmail = require("isemail");
const { ApolloError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");

module.exports.login = async (_, { form }, { dataSources }) => {
  try {
    const { email, password } = form;

    if (!isEmail.validate(email)) return new ApolloError("Неверный Email!");

    const user = await dataSources.userAPI.findUser({ email });
    if (!user) return new ApolloError("Такого пользователя не существует!");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return new ApolloError("Неверный пароль");

    const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
      expiresIn: "1m",
    });

    return {
      token,
      user,
    };
  } catch (e) {
    console.log(e);
    return new ApolloError("Ошибка сервера!");
  }
};
