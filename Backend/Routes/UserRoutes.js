import express from 'express';
const router = express.Router();

import { register, login, logout , getMyProfile ,
changepassword ,updateprofile , updateprofilepicture  , forgetpassword , resetpassword} 
from '../Controllers/UserController.js';

import { isAuthenticated } from '../Middlewares/auth.js';

router.route('/register').post(register)

router.route('/login').post(login)

router.route('/logout').get(logout)

router.route('/me').get(isAuthenticated,getMyProfile)

router.route('/changepassword').put(isAuthenticated,changepassword)

router.route('/updateprofile').put(isAuthenticated,updateprofile)

router.route('/updateprofilepicture').put(isAuthenticated,updateprofilepicture)

router.route('/forgetpassword').post(forgetpassword)

router.route('/resetpassword/:token').put(resetpassword)





export default router;