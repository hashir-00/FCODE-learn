const mongoose= require('mongoose')

const questionSchema=new mongoose.Schema({
    question:{
        type:[],
        default:[]
    },
    options:{
        type:[],
        default:[]
    }, 
    answer:{
        type:String

    },
    answerIndex:{
        type:Number
    },
    

    },{timestamps:true})
const Questions=mongoose.model('Questions',questionSchema) 

module.exports= {
    Questions
}