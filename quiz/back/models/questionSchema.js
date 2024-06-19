const mongoose= require('mongoose')

const questionSchema=new mongoose.Schema({
    question:{
        type:Array,
    },
    options:{
        type:[],
        default:[]
    },
},{timestamps:true})
const Questions=mongoose.model('Questions',questionSchema) 

module.exports= {
    Questions
}