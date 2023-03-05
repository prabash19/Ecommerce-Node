const express = require("express");
const userRegisterRoutes = express.Router();
const userController = require("../controllers/userController");
const checkAuth = require("../middleware/checkAuth");
const checkUserAccess = require("../middleware/checkUserAccess");
userRegisterRoutes
  .route("/")
  .get(
    checkAuth,
    checkUserAccess("super-admin"),
    userController.getAllUserRegister
  )
  .post(userController.postUserRegister)
  .patch(userController.patchUserRegister)
  .delete(userController.deleteUserRegister);

module.exports = userRegisterRoutes;
