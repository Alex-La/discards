const { ApolloError } = require("apollo-server-express");
const bcrypt = require("bcryptjs");

module.exports.registration = async (_, { form }, { dataSources }) => {
  try {
    const { name, email, password } = form;

    if (password.length < 6) return new ApolloError("Слишком короткий пароль!");

    const candidate = await dataSources.userAPI.findUser({ email });
    if (candidate) return new ApolloError("Пользователь уже существует!");

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await dataSources.userAPI.createUser({
      name,
      email,
      password: hashedPassword,
    });

    if (user) return "Пользователь создан!";
    else return new ApolloError("Ошибка создания пользователя!");
  } catch (e) {
    console.log(e);
    return new ApolloError("Ошибка сервера!");
  }
};
