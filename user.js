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
                res.status(200).json({success :true ,message :"User logged in Successfully"});
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