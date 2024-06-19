const express= require('express');
const { getQuestion ,insertQuestion, deleteQuestions, getAllResult, insertResult, updateResult, deleteResult} = require('../controllers/controller');
const router= express.Router();

//questions
router.get('/questions',getQuestion)
router.post('/questions',insertQuestion)
// router.delete('/questions',deleteQuestions)
// router.put('/questions',insertQuestion)

//result
router.get('/result',getAllResult)
router.post('/result',insertResult)
router.delete('/result',deleteResult)
//router.put('/result',updateResult)
// {/**use this when one end point exists */}
// router.route('/questions').get(getQuestion).post(insertQuestion)


module.exports=router
