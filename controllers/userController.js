const userRegisterModel = require("../models/userRegister");
exports.postUserRegister = (req, res) => {
  userRegisterModel.create(req.body);
  res.send("register successfull");
};

exports.getAllUserRegister = async (req, res) => {
  //const data = await userRegisterModel.findOne({ age: req.params.id });
  //finding one doc by its _id
  //const data = await userRegisterModel.find(); // for all

  console.log("data is", req.query);
  const data = await userRegisterModel.find(req.query);
  res.status(200).json({
    status: "success bruh",
    data,
  });
};
exports.patchUserRegister = async (req, res) => {
  console.log("age is", req.params.id);
  console.log("new age is", req.body);
  try {
    const data = await userRegisterModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    console.log("err is", err);
  }
};
exports.deleteUserRegister = async (req, res) => {
  console.log("id is", req.params.id);
  try {
    const data = await userRegisterModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    console.log("err is", err);
  }
};
