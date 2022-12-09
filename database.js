const {createPool}=require('mysql');

const pool=createPool({
    host:"loaclhost",
    user:"root",
    password:"rootuser",
    connectionLimit:1000
});

pool.query('SELECT * FROM node_complete.login_user' ,(err ,res) => {
    if(err) {
        console.log("Error:Request failed with status code 403");
    }
    else{
       console.log(res);
    }
});