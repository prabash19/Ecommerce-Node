const AppError = require("../utils/globalErrorHandle");

function checkUserAccess(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role.toLowerCase())) {
      return next(new AppError("access not granted for user", 403));
    }
    next();
  };
}
module.exports = checkUserAccess;
