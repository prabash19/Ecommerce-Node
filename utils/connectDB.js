const dotenv = require("dotenv");
require("dotenv").config({ path: "./config.env" });
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
