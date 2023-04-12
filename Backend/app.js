import express from 'express';
import { config } from 'dotenv';
import course   from './Routes/CourseRoutes.js';
import user     from './Routes/UserRoutes.js';
import payment  from './Routes/PaymentRoutes.js';
import other from './Routes/OtherRoutes.js';

import cookieParser from 'cookie-parser';

config({
    path: "./Config/config.env",
})
const app = express();

app.use(express.json());
app.use(cookieParser());


app.use('/api/v1',course);
app.use('/api/v1',user);
app.use('/api/v1',payment);
app.use('/api/v1',other);


export default app;