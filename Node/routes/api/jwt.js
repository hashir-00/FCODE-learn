const express= require('express');
const jwt= require('jsonwebtoken');
const router = express.Router();


router.get('/',(req,res)=>{
    res.json({
        message: 'Welcome to the API'
    })
})

router.post('/posts',veryfyToken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }
        else{
            res.json({
                message: 'Post created',
                authData
            })
        }
    })

})


router.post('/login',(req,res)=>{
    const user= {
        id: 1,
        username: 'brad',
        email: 'john@123.com'
    }
    jwt.sign({user:user},'secretkey',(err,token)=>{
        res.json({
            token
        })
    
    })
})

function veryfyToken(req,res,next){
    const bearerHeader= req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer= bearerHeader.split(' ');
        const bearerToken= bearer[1];
        req.token= bearerToken;
        next();
    }
    else{
        res.sendStatus(403);
    }

}

module.exports= router;