const Mongoose = require("mongoose");
const config = require("config");

module.exports.mongoConnect = async () => {
  try {
    await Mongoose.connect(config.get("mongoString"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (e) {
    console.log("Mongodb error", e.message);
    process.exit(1);
  }
};
