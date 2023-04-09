import express from 'express';
import { config } from 'dotenv';

config({
    path: "./Config/config.env",
})
const app = express();

import course from './Routes/CourseRoutes.js';
import user from './Routes/UserRoutes.js';

app.use('/api/v1',course);
app.use('/api/v1',user);

export default app;