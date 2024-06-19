const mongo= require('mongoose')

 async function db (){

    try{
   mongo.connect(process.env.URI)
        console.log('connected to database')
    }
    catch(error){
        console.log('Error in connecting to database')
    }
}

module.exports={
    db
}
 