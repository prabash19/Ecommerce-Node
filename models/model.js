const mongoose = require("mongoose");
const TestSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
});

const TestModel = mongoose.model("TestModel", TestSchema);
module.exports = TestModel;
