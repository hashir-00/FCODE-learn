const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  userName: {
    type:  String ,
    default:""
  },
  result: {
    type:  [], default: [] ,
  },
  attempts: {
    type:  Number,
  },
  points: {
    type:  Number,
  },
  achieved: {
    type:  String,
  },
},{timestamps:true});

const Results = mongoose.model("Result", resultSchema);

module.exports = {
  Results
};
