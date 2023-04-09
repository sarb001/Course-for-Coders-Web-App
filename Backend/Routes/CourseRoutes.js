import express from 'express';
import { getAllCourses  , CreateCourses} from '../Controllers/CourseController.js';

const router = express.Router();

router.route('/courses').get(getAllCourses);

router.route('/createcourses').post(CreateCourses);

export default router;