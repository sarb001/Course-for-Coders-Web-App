import { User } from '../Models/User.js'
import { sendToken } from '../Utils/sendToken.js';


export const register  = async(req,res,next) => {
    const { name, email, password } = req.body;

  if (!name || !email || !password){
      return res.json({message : " Please Fill All the Fields "});
  }

  let user = await User.findOne({ email });

  if (user) return res.json({message : 'User Already EXisted '})

  user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id:'tempid',
      url: "tempurl",
    },
  });

  sendToken(res,user,'Registered Successfully',201);

}

export const login     = async(req,res,next) => {

    const { email, password } = req.body;

  if (!email || !password){
      return res.json({message : " Please Fill All the Fields "});
    }
    
    let user = await User.findOne({ email }).select("+password");
    
    if (!user) return res.json({message : 'User Not Present'})
    const isMatch = await user.comparePassword(password);
    
    if(!isMatch){
        return res.json({message : " Incorrect Email or Password "});
    }

  sendToken(res,user,`Welcome Back , ${user.name} Broo`,200); 
}

export const logout =   async(req,res,next) => {
     res.status(200)
     .cookie("token", null, {
        expires: new Date(Date.now()),
     }).json({
        success : true,
        message : " Logged Out Successfully "
     });
}

export const getMyProfile =   async(req,res,next) => {
     const user = await User.findById(req.user._id);

     res.status(200).json({
         success : true,
         user,
     })
}