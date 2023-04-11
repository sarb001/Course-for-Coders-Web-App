import express from 'express';
import { getAllCourses  , CreateCourses ,
getCourseLectures , addLectures} from '../Controllers/CourseController.js';
import singleupload from '../Middlewares/multer.js';

const router = express.Router();

router.route('/courses').get(getAllCourses);
router.route('/createcourses').post(singleupload,CreateCourses);

router.route('/course/:id').get(getCourseLectures)
.post(singleupload,addLectures);


export default router;