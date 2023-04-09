import mongoose from "mongoose";

export const connectDB = async() => {
        try{
            const  { connection } = await mongoose.connect(process.env.MONGO_URI);
            console.log(`Mongoose Connected With +++++`);

        }catch(err){
            console.log('MongoDB Error Here');
        }
}