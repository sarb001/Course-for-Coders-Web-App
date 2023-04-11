import app from "./app.js";
import { connectDB } from './Config/Database.js';
import cloudinary from 'cloudinary';
import Razorpay from 'razorpay';

connectDB();

cloudinary.v2.config({
  cloud_name    : process.env.CLOUDINARY_CLIENT_NAME,
  api_key       : process.env.CLOUDINARY_CLIENT_API,
  api_secret    : process.env.CLOUDINARY_CLIENT_SECRET,
})

export const instance = new Razorpay({ 
   plan_id :process.env.PLAN_ID,
   key_id: process.env.RAZORPAY_API_KEY,
   key_secret: process.env.RAZORPAY_API_SECRET, 
  });

app.listen(process.env.PORT , () => {
        console.log(`Serveris Running on PORT ${process.env.PORT} her..`);
})