const express= require('express');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/api/users',require('./routes/api/users'))
app.use('/api',require('./routes/api/jwt'))


var server= app.listen(5000,function(req,res){
    console.log("Server started at 5000");
    var host=server.address().address;
    var port=server.address().port;
    console.log("Server started at http://%s:%s",host,port);
})