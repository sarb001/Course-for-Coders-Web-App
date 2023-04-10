import express from 'express';
import { config } from 'dotenv';
import course from './Routes/CourseRoutes.js';
import user from './Routes/UserRoutes.js';


config({
    path: "./Config/config.env",
})
const app = express();


app.use(express.json());

app.use('/api/v1',course);
app.use('/api/v1',user);

export default app;