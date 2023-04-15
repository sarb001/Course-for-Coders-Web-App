import { User } from '../Models/User.js'
import { sendToken } from '../Utils/sendToken.js';
import { sendmail } from '../Utils/sendmail.js';
import { Course } from '../Models/Course.js';
import cloudinary from 'cloudinary';

import crypto from 'crypto';
import getDataUri from '../Utils/dataURI.js';

export const register  = async(req,res,next) => {

    const { name, email, password } = req.body;
    const file = req.file;

  if (!name || !email || !password  || !file){
      return res.json({message : " Please Fill All the Fields "});
  }

  let user = await User.findOne({ email });
  if (user) return res.json({message : 'User Already EXisted '})


  const fileUri = getDataUri(file);
  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

  user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id:mycloud.public_id,
      url: mycloud.secure_url,
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
        httpOnly : true,
        secure : true,
        sameSite : "none"
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

export const changepassword = async(req,res) => {

    const { oldpassword  ,newpassword } = req.body;
    if(!oldpassword || !newpassword){
        return res.json({message : "Please ENter all the Fields "})
    }

    const user = await User.findById(req.user._id).select("+password");
    const isMatch = await user.comparePassword(oldpassword);

    if(!isMatch){
        return  res.json({message: " Incorrect Old Password "})
    }

    user.password = newpassword;
    await user.save();

    res.status(200).json({
        success : true,
        message : " Password Changed Successfully ",
    })

}

export const  updateprofile = async(req,res) => {

    const {name,email} = req.body;
    const user = await User.findById(req.user._id);
    console.log('user in profile is -',user);

    if(name)  user.name  =  name ;
    if(email) user.email = email ;

    await user.save();
    res.status(200).json({
        success : true,
        message : "Profile Updatedd Successfully",
    });
}


export  const updateprofilepicture = async(req,res) => {

    const file = req.file;
    const user = await User.findById(req.user._id);

    const fileUri = getDataUri(file);
    const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

    await cloudinary.v2.uploader.destroy(user.avatar.public_id);

    user.avatar = {
        public_id : mycloud.public_id,
        url : mycloud.secure_url,
    }
    await user.save();
    
    res.status(200).json({
        success : true,
        message : " Profile Picture Updated Successfully.. "
    });

}

export  const forgetpassword = async(req,res) => {
     const { email } = req.body;

     const user  = await User.findOne({ email });

     if(!user){
        return res.json({message: " User not Found "})
     }  
     const resetToken = await user.getResetToken();

     await user.save();

     const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;
     const message = ` Click on the Link to Reset your Password , ${url} `;

     await  sendmail(user.email,"Course-for-Coder Reset Password",message);

     res.status(200).json({
        success : true,
        message : "Reset Token  has been Sent to Mail"
     })
}

export  const resetpassword = async(req,res) => {
    const { token } = req.params;
    const ResetPasswordToken = crypto.createHash('sha256').update(token).digest("hex");

    const user = await User.findOne({
        ResetPasswordToken,
        ResetPasswordExpire: {
            $gt : Date.now(),
        },
    })

    if(!user){
        return res.json({message : " Token is Invalid or has Been Expired "});
    }

    user.password = req.body.password;
    user.ResetPasswordToken  = undefined; 
    user.ResetPasswordExpire = undefined; 

    await user.save();
    res.status(200).json({
        success : true,
        message: "Password Reseted Success"
    })
}

export const addtoPlaylist = async(req,res) => {
    
    const user  = await User.findById(req.user._id);
    
    const course  = await Course.findById(req.body.id);

    if(!course) {
        return res.json({message : " Invalid Course ID "});
    }

    const itemExist = user.playlist.find((item) => {
        if(item.course.toString() === course._id.toString()) return true;
    })


    if(itemExist){
        return res.json({message : " Item Already Existed "});
    }

    user.playlist.push({
        course : course._id,
        poster : course.poster.url,
    });

    await user.save();
    res.status(200).json({
        success: true,
        message : " Added to PLaylist Successfully ",
    })

}

export const removefromPlaylist = async(req,res) => {

    const user  = await User.findById(req.user._id);
    const course  = await Course.findById(req.query.id);

    if(!course){
        return res.json({message : " Invalid Course ID "});
    }
    
    const newPlaylist  = user.playlist.filter((item) => {
        if(item.course.toString() !== course._id.toString())
        return item;
    })

    user.playlist = newPlaylist;
    await user.save();

    res.status(200).json({
        success: true,
        message : " Removed From Playlist ",
    })


}

// Get All Users - Only Admin Knows 

export const getallusers = async(req,res) => {
    const users = await User.find({});
    res.status(200).json({
        success : true,
        users,
    });
}


export const updateUserRole = async(req,res) => {
    const user = await User.findById(req.params.id);
    if(!user){
        return res.json({message : " User Not Found "});
    }

    if(user.role === "user"){
        user.role = "admin"
    }else{
        user.role = "user";
    }

    await user.save();
    res.status(200).json({
        success : true,
        message : "Role Updated "
    })
}

export const deleteuser = async(req,res) => {
     const user = await User.findById(req.params.id);

     if(!user){
        return res.json({message : " User Not Found "});
     }
     await cloudinary.v2.uploader.destroy(user.avatar.public_id);
     await user.deleteOne();

     res.status(200).json({
        success : true,
        message : " User Deleted Successfully ",
    })
}


export const deletemyprofile = async(req,res) => {
    const user = await User.findById(req.user._id);

    await cloudinary.v2.uploader.destroy(user.avatar.public_id);
    await user.remove();

    res.status(200).cookie("token" , null , {
        expires : new Date(Date.now())
    }).json({
        success : true,
        message : " user Deleted Successfully ",
    });
}