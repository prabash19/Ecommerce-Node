const authRegisterModel = require("../models/authRegister");
const AppError = require("../utils/globalErrorHandle");
const bcrypt = require("bcrypt");
const passwordCompare = require("../helpers/passwordCheck");
const sendToken = require("../helpers/createToken");
exports.postauthRegister = async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const newUser = await authRegisterModel.create({
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
  });

  const token = sendToken(newUser._id);
  res.status(201).json({
    message: "all good",
    token,
    newUser,
  });
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new AppError("ID or Password not provided", 400));
  }

  const user = await authRegisterModel
    .findOne({ username })
    .select("+password");

  const correctPassword = await passwordCompare(password, user.password);

  if (!user || !correctPassword) {
    return next(new AppError("Incorrect Email or Password", 401));
  } else {
    const token = sendToken(user._id);
    res.status(201).json({
      token,
      message: "logged in",
    });
  }
};
