const bcrypt=require('bcrypt');
const user=require('./user');

function isstringinvalid(string){
    if(string == undefined || string.length === 0){
        return true;
    }
    else{
        return false;
    }
}

const details=(req,res) =>{
    const {email, number}=req.body;
    if(isstringinvalid(email) || isstringinvalid(number)){
       return res.status(400).json({success :false ,message :"Email or number is missing"});
    }
}

const pay= User.compare(email,user[0].email,(err,result) =>{
    if(err){
        res.status(500).json({success:false, message:"Something went wrong"});
    }
    if(result ===true){
        res.status(200).json({success :true ,message :"Payment is successful"});
    }
    else{
        return res.status(400).json({success :false ,message :"Transaction Failed"});
    }
});

module.exports=details;
module.exports=pay;




