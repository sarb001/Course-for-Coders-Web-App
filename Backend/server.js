import app from "./app.js";

import { connectDB } from './Config/Database.js';
import cloudinary from 'cloudinary';


connectDB();

cloudinary.v2.config({
  cloud_name    : process.env.CLOUDINARY_CLIENT_NAME,
  api_key       : process.env.CLOUDINARY_CLIENT_API,
  api_secret    : process.env.CLOUDINARY_CLIENT_SECRET,
})

app.listen(process.env.PORT , () => {
        console.log(`Serveris Running on PORT ${process.env.PORT} her..`);
})