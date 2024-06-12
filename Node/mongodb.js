require('./models/db')

const express = require('express');
const path = require('path');
const handleBars= require('handlebars');
const exphbs= require('express-handlebars');
const {allowInsecurePrototypeAccess}= require('@handlebars/allow-prototype-access');
const bodyParser = require('body-parser');

const studentController = require('./controllers/studentController')
var app= express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send(
        '<h2>welcome</h2><br/><h3><a href="/student/list"> click here</a> </h3>'
        
    )
})
app.set('views',path.join(__dirname,'/views/'))

app.engine('hbs',
    exphbs.engine({
    extname:'hbs',
    defaultLayout:'MainLayout',
    layoutsDir:__dirname+'/views/layouts/',
    handlebars: allowInsecurePrototypeAccess(handleBars)

}))

app.set('view engine','hbs');
app.use('/student',studentController)
app.listen(8000,(res,req)=>{
    console.log('Server is running on port 8000');
})