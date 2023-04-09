import { User } from '../Models/User.js'
import { sendToken } from '../Utils/sendToken.js';


export const register = async(req,res,next) => {
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