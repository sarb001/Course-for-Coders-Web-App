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