const express = require('express');
const router = express.Router();
const uuid = require('uuid');

let users = require('../../users');

router.get('/',(req,res)=>{
    res.json(users);
})

//by id

router.get('/:id',(req,res)=>{
    const userFind= user => user.id === parseInt(req.params.id);
    const found= users.some(userFind)
    if(found){
        res.json(users.filter(userFind))
    }
    else{
        res.sendStatus(404);
    }
})

//post

router.post('/',(req,res)=>{
    const newUser={
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    }
    if(!newUser.id || !newUser.name || !newUser.email){
        return res.sendStatus(400);
    }
    users.push(newUser);
    res.json(users);
})

//update
router.put('/:id',(req,res)=>{
    const userFind= user => user.id === parseInt(req.params.id);
    const found= users.some(userFind)
    if(found){
        const updateUser= req.body;
        users.forEach(user=>{
            if(user.id === parseInt(req.params.id)){
                user.name= updateUser.name ? updateUser.name : user.name;
                user.email= updateUser.email ? updateUser.email : user.email;
                res.json({msg: 'User updated',user})
            }
        })
    }
    else{
        res.sendStatus(404);
    }

  

})
//delete
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        users.splice(index, 1);
        res.json({ msg: 'User deleted', users });
    } else {
        res.status(404).json({ msg: 'User not found' });
    }
});

module.exports= router;