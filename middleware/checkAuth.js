const AppError = require("../utils/globalErrorHandle");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const authRegisterModel = require("../models/authRegister");
module.exports = async (req, res, next) => {
  let token;
  let decoded;
  //checking if token exists
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    next(new AppError("User is not logged in", 401));
  }
  //checking if token exists

  //checking if token has not been modified

  try {
    decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    console.log("erris", err);
  }

  //checking if token has not been modified

  //checking if user still exits
  const currentUser = await authRegisterModel.findOne({ _id: decoded.id });
  if (!currentUser) {
    return next(new AppError("Token is no longer valid", 401));
  }
  //checking if user still exits

  // !!!! IMPORTANT  !!!! //
  req.user = currentUser;

  /* We assign current User to req.user so that the next
 middleware can know which user is currently being processed */

  // !!!! IMPORTANT  !!!! //
  next();
};
