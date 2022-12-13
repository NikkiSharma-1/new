const express=require('express');
const mysql=require('mysql');
const user=require('./user');
const payment=require('./payment');
const url=require('./url');
const uuid=require('./uuid');

const db=require('./database');

User.hasMany(Expense);
Expense.belongsTo(User); 

db.execute('SELECT * FROM node_complete.login_user' ,(err,result) => {
if(result){
    console.log(result);
}
else{
    console.log(err);
}
});

db.execute('SELECT * FROM node_complete.expense' ,(err,result) => {
    if(result){
        console.log(result);
    }
    else{
        console.log(err);
    }
    });

const app=express();
app.get('SELECT * FROM node_complete.forgot_password' ,(req,res) =>{
    let sql="CREATE DATABASE Forgot_Password(uuid LONGTEXT(255) ,UserId VARCHAR(255) ,isActive BOOLEAN(), PRIMARY KEY(uuid))";

    db.query(sql ,(err, result) => {
        if(err) {
            console.log(err);
        }
        console.log(result);
    });
});
app.listen(4000);