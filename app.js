const express=require('express');
const mysql=require('mysql');
const user=require('./user');

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
app.listen(4000);