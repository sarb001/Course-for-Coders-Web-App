import jwt from 'jsonwebtoken';
import { User } from '../Models/User.js';

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