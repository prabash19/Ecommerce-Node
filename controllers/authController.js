const authRegisterModel = require("../models/authRegister");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.postauthRegister = async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const newUser = await authRegisterModel.create({
    username: req.body.username,
    password: req.body.password,
  });

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.status(201).json({
    message: "all good",
    token,
    newUser,
  });
};
