var http = require('http');  
const { URL } = require('url'); 
const express=require('express');

  
const url=http.createServer(function (req, res) {  
    
    const queryString = new URL('http://localhost:3000/password/resetpassword/96c81373-6d2b-452f-a65d-6ce77e457e39');  
    console.log(queryString);  
    
}).listen(4200); 

const check=(req,res) =>{
    const {email}=req.body;
    bcrypt.compare(email,user[0].email,(err,result) =>{
        if(isActive === true){
            res.status(200).json({success:true});
            res.send(url);
        }
        else{
            res.status(404).json({success :false});
        }
    })
}

module.exports=url;
module.export=check;