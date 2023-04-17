import express from 'express';
import { config } from 'dotenv';
import course   from './Routes/CourseRoutes.js';
import user     from './Routes/UserRoutes.js';
import payment  from './Routes/PaymentRoutes.js';
// import other from './Routes/OtherRoutes.js';
import cors from 'cors';

import cookieParser from 'cookie-parser';

config({
    path: "./Config/config.env",
})
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin : process.env.FRONTEND_URL,   
    credentials : true,
    methods : ["GET","POST","PUT","DELETE"],
}))


app.use('/api/v1',course);
app.use('/api/v1',user);
app.use('/api/v1',payment);
// app.use('/api/v1',other);


export default app;

app.get('/' , (req,res)  => {
    res.setHeader("Access-Control-Allow-Credentails", "true");
    res.send(`<h2>  Server is Working ,  
    <a href = ${process.env.FRONTEND_URL}> Click </a> 
    to visit Frontend  </h2>`)
})