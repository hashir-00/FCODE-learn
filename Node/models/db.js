const mongoose = require('mongoose')


mongoose.connect('mongodb://0.0.0.0:27017/StudentDB',{
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