const db=require('./database');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

function isstringinvalid(string){
    if(string == undefined || string.length === 0){
        return true;
    }
    else{
        return false;
    }
}

const signup= async (req,res) => {
    try {
        const {name ,email,password} =req.body;
        console.log('email' ,email);
        if(isstringinvalid(name) || isstringinvalid(email) ||isstringinvalid(password)){
            return res.status(500).json({err: 'Bad parameters something is missing'});
        }
        const saltrounds=10;
        bcrypt.hash(password ,saltrounds ,async(err,hash) =>{
            console.log(err);
            await User.create({name ,email,password:hash});
            res.status(202).json({message :'User created successfully'})
        })
    }catch(err){
        res.status(505).json(err);
    }
}

function generateToken(id){
    return jwt.sign({userId:id} ,'8325521hdjbscs6e9012ddbssdmvlfha63i032mjesadhvkdvhydhaa');
}


const login=(req,res) =>{
    const {email, password}=req.body;
    if(isstringinvalid(email) || isstringinvalid(password)){
       return res.status(400).json({success :false ,message :"Email or Password is missing"});
    }
    console.log(password);
    User.findAll({ where : {email}}).then(user =>{
        if(user.length >0){
           bcrypt.compare(password,user[0].password,(err,result) =>{
            if(err){
                res.status(500).json({success:false, message:"Something went wrong"});
            }
            if(result ===true){
                res.status(200).json({success :true ,message :"User logged in Successfully" ,token:generateToken(user[0].id)});
            }
            else{
                return res.status(400).json({success :false ,message :"Password is incorrect"});
            }
        });
        }else{
            return res.status(404).json({success :false ,message :"User doesn't exist"});
        }
    }).catch(err => {
        res.status(500).json({message :"Error" ,success:false});
    })
}

module.exports=signup;
module.exports=login;