const { login } = require("./login");
const { registration } = require("./registration");
const { updateUser } = require("./updateUser");

const Mutation = { login, registration, updateUser };

module.exports = Mutation;
