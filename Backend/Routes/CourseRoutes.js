import express from 'express';
import { getAllCourses  , CreateCourses ,
getCourseLectures , addLectures, deletecourse, deleteLecture} from '../Controllers/CourseController.js';
import singleupload from '../Middlewares/multer.js';
import { authorizeAdmin, isAuthenticated } from '../Middlewares/auth.js';

const router = express.Router();

router.route('/courses').get(getAllCourses);
router.route('/createcourses').post(isAuthenticated,authorizeAdmin,singleupload,CreateCourses);

// Add Lecture 

router.route('/course/:id')
.get(isAuthenticated,getCourseLectures)
.post( isAuthenticated, authorizeAdmin, singleupload,addLectures)
.delete( isAuthenticated, authorizeAdmin, deletecourse)         // delete course 


// Delete Lecture 

router
.route('/lecture')
.delete(isAuthenticated,authorizeAdmin,deleteLecture)

export default router;