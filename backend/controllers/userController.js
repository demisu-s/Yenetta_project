const User=require('../models/userModel')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup=async(req,res)=>{
    
    const{firstName,lastName,email,password,role}=req.body
    const salt=bcrypt.genSalt(10)
    const hashedPassword=bcrypt.hash(password, salt)
    const user= await User.create({
        firstName,
        lastName,
        email,
        password:hashedPassword,
        role,
    })
    res.status(201).json(user)
    
   
}
const login=async(req,res)=>{
    const {email,password}=req.body
    const user=await User.findOne({email})
    if(user && (bcrypt.compare(password,user.password))){
        const token =generateToken(user.id)
        res.json({
            _id:user.id,
            firstName:user.firstName,
            email:user.email,
            token:generateToken(user._id)
        })
    }
    else{
        res.status(400).json({error:"invalid credential"})
    }
}
const getProfile = (req, res) => {
    res.json(req.user);
  };
  
  const generateToken = (id) => {
     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
  };

module.exports={signup,login,getProfile}