const express = require('express');
const mysql= require('mysql');
const { stringify } = require('uuid');
const app= express();


const dbData={
    host:'localhost',
    user:'root',
    password:'',
    database:'nodesql'

}
const db = mysql.createConnection(dbData);

db.connect(err=>{
    if(err){
        throw err;
    }
    console.log("connected successfully");
})

//create db
app.get('/createDB',(req,res)=>{
    let sql= 'CREATE DATABASE nodesql';
    db.query(sql,(err,result)=>{
        if(err){
            throw err;
        }
        console.log(result);
        res.send("Database created");
    
})
})


//create table
app.get('/createTB',(req,res)=>{
    let sql= 'CREATE TABLE employee(id int AUTO_INCREMENT,name VARCHAR(255),designation VARCHAR(255),PRIMARY KEY(id))';
    db.query(sql,(err)=>{
        if(err){
            throw err
        }
        res.send("Employee table created")
    })
})
//insert
app.get('/employee',(req,res)=>{
    let employee={
        name:"hashir",
        designation:"CEO",
         }
    let sql= 'INSERT INTO employee SET ?';
    db.query(sql,employee,(err)=>{
        if(err){
            throw err
        }
        res.send("Employee added")
    })
})
//select
app.get('/getEmployee/:id',(req,res)=>{
    let id= req.params.id
    let sql= `SELECT * FROM employee WHERE id=${id}`;
    db.query(sql,(err,result)=>{
        if(err){
            throw err
        }
        res.send(result)
    })
})

//update
app.get('/updateEmployee/:id',(req,res)=>{

    let name = "name";
    let designation = "designation";

    let sql= `UPDATE employee SET name='${name}',designation='${designation}' WHERE id=${req.params.id}`;
    db.query(sql,(err)=>{
        if(err){
            throw err
        }
        res.send("Employee updated")
    }
    )
}
)
//delete
app.get('/deleteEmployee/:id',(req,res)=>{
    let sql= `DELETE FROM employee WHERE id=${req.params.id}`;
    db.query(sql,(err)=>{
        if(err){
            throw err
        }
        res.send("Employee deleted")
    })
})


app.listen(8000,(req,res)=>{
    console.log("Server started at 8000");
})