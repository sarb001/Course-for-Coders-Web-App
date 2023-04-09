import mongoose from "mongoose";
import validate from 'validator';

const schema = new mongoose.Schema({

    name : {
        type:String,
        required : [true , "Please ENter your name"],
    },
    email : {
        type:String,
        required : [true , "Please ENter your email"],
        unique :true,
        validate : validator.isEmail,
    },
    password : {
        type:String,
        required : [true , "Please ENter your Password"],
        minLength : [6,"Password must be atleast 6 Characters"],
        select : false,
    },
    role : {
        type:String,
        enum : ["admin","user"],
        default: "user",
    },
    subscription : {
        id : String,
        status : String
    }, 
    avatar: {
        public_id :{
            type : String,
            required : true
        },
         url :{
            type : String,
            required : true
        }
    },

    playlist :[
        {
            course : {
                type: mongoose.Schema.Types.ObjectId,
                ref : "Course",
            },
            poster : String,
        }
    ],

    createdAt: {
        type:Date,
        default: Date.now,
    },
    ResetPasswordToken: String,
    ResetPasswordExpire : String,
});

export const User = mongoose.model("User",schema)