const mongoose = require("mongoose");
const authRegister = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
});

const authRegisterModel = mongoose.model("authRegisters", authRegister);
module.exports = authRegisterModel;
