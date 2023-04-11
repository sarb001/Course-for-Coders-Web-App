import jwt from 'jsonwebtoken';
import { User } from '../Models/User.js';

// Authorized User is Logged In ornot??

export const isAuthenticated = async(req,res,next) => {

    const {token} = req.cookies;
    console.log('token in auth is-' , token);
    if(!token) {
        return res.json({message : " Not Logged Innnn "})
    }
    
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id);
    console.log('token user --' , req.user);
    next();
}

// Authorize Admin First 

export const authorizeAdmin = async(req,res,next) => {
    if(req.user.role !== "admin"){
        return res.json({message : `${req.user.role}  is not allowed to Access this Resource `})
    }
    next();
}