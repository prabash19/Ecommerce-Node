const express = require("express");
const userRegisterRoutes = express.Router();
const userController = require("../controllers/userController");

userRegisterRoutes
  .route("/")
  .get(userController.getAllUserRegister)
  .post(userController.postUserRegister)
  .patch(userController.patchUserRegister)
  .delete(userController.deleteUserRegister);

module.exports = userRegisterRoutes;
