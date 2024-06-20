const { Questions } = require("../models/questionSchema");
const { Results } = require("../models/resultSchema");
const data = require("../database/data");

//questions
async function getQuestion(req, res) {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json(error);
  }
}

async function insertQuestion(req, res) {
  try {
  
 Questions.insertMany(data).then(res.json("inserted")).catch(err=>console.log(err))

  } catch (error) {
    res.json(error);
  }
}
async function deleteQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json("deleted");
  } catch (error) {
    res.json(error);
  }
}
// async function updateQuestions(req, res) {
//   try {
//     await Questions
//       .update
//       .findOneAndUpdate({ question: "What is the capital of France?" }, { question: "What is the capital of France?" });
//     res.json("updated");
//   } catch (error) {
//     res.json(error);
//   }
// }
//results
async function getAllResult(req, res) {
try{
  const r = await Results.find();
  res.json(r);
}catch(error){
  res.json("error")
}
}

async function insertResult(req, res) {

 try{
  const {userName,result,attempts,points,achieved}  =req.body
  if(!userName && !result ){
    throw new Error("Data empty")
  }
  Results.create( {userName,result,attempts,points,achieved}).
  then(res.json("result added")).
  catch(err=>console.log(err))
  
 }
 catch(error){
    console.log(error)
 }

}



async function deleteResult(req, res) {
 try{
  await Results.deleteMany();
  res.json("deleted");
 }
  catch(error){
    res.json("error")
  }
}

module.exports = {
  getQuestion,
  insertQuestion,
  deleteQuestions,
  // updateQuestions,
  getAllResult,
  insertResult,
  deleteResult,
  // updateResult,
};
