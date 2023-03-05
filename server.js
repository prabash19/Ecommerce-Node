const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const AppError = require("./utils/globalErrorHandle");
const testRoutes = require("./routes/route");
const userRegisterRoutes = require("./routes/userRegister");
const authRegisterRoutes = require("./routes/authRegister");
require("dotenv").config({ path: "./config.env" });
const app = express();
const port = process.env.PORT || 5000;

// ------------------------------------------------------- //
const DB_PASSWORD = process.env.DATABASE_PASSWORD;
const DB = process.env.DATABASE.replace("<PASSWORD>", DB_PASSWORD);
mongoose.set("strictQuery", true);
connectDB();
async function connectDB() {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
    });
    console.log("DB connected");
  } catch (err) {
    console.log("DB error: ", err);
  }
}
// ------------------------------------------------------- //

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// ------------------------------------------------------- //

app.use("/test", testRoutes);
app.use("/register", userRegisterRoutes);
app.use("/auth", authRegisterRoutes);

app.all("*", (req, res, next) => {
  next(new AppError("Cannot find requested route", 404));
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

app.listen(port);
