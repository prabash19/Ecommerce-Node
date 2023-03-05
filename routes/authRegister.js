const express = require("express");
const authRegisterRoutes = express.Router();
const authController = require("../controllers/authController");

authRegisterRoutes.route("/").post(authController.postauthRegister);

module.exports = authRegisterRoutes;

// .patch(authController.patchauthRegister)
// .get(authController.getAllauthRegister)
// .delete(authController.deleteauthRegister);
