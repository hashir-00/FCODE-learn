const mongoose = require('mongoose')
const url= 'mongodb://localhost:27017/StudentDB'
mongoose.connect(url,{
    useNewUrlParser:true,
  
},
(err)=>{
    if(!err){
        console.log('MongoDB connection succeeded')
    }
    else{
        console.log('Error in DB connection:'+err)
    }
}
)

require('./student.model')