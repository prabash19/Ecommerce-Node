const mongoose = require("mongoose");
const userRegister = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  age: {
    type: String,
  },
});

const userRegisterModel = mongoose.model("userRegister", userRegister);
module.exports = userRegisterModel;
