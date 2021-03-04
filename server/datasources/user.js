const { DataSource } = require("apollo-datasource");
const isEmail = require("isemail");
const User = require("../../models/User");

class UserAPI extends DataSource {
  async createUser({ name, email, password }) {
    const user = new User({
      name,
      email,
      password,
    });
    await user.save();
    return user;
  }

  async findUser({ email }) {
    if (!isEmail.validate(email)) return;
    return await User.findOne({ email });
  }

  async updateUser(data) {
    return await User.findOneAndUpdate({ _id: data._id }, data, {
      new: true,
      useFindAndModify: false,
    });
  }
}

module.exports = UserAPI;
