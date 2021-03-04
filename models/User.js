const { Schema, model } = require("mongoose");
const { Phone, PhoneNumberType } = require("mongoose-type-phone");

const schema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: false },
  phone: {
    type: Phone,
    allowBlank: true,
    defaultRegion: "RU",
    allowedNumberTypes: PhoneNumberType.MOBILE,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = model("User", schema);
