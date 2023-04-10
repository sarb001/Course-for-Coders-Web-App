import express from 'express';
const router = express.Router();
import { register, login, logout , getMyProfile } from '../Controllers/UserController.js';
import { isAuthenticated } from '../Middlewares/auth.js';


router.route('/register').post(register)

router.route('/login').post(login)

router.route('/logout').get(logout)

router.route('/me').get(isAuthenticated,getMyProfile)

export default router;