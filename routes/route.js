const express = require("express");
const testRoutes = express.Router();
const TestModel = require("../models/model");
testRoutes.post("/", (req, res) => {
  console.log("req is", req.body);
  TestModel.create(req.body);
  res.send("hello");
});
testRoutes.get("/", (req, res) => {
  res.send("working");
});
module.exports = testRoutes;
