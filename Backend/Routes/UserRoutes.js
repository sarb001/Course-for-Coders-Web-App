import express from 'express';
const router = express.Router();

import { register, login, logout , getMyProfile ,
changepassword ,updateprofile , updateprofilepicture  , forgetpassword ,
 resetpassword , addtoPlaylist , removefromPlaylist } 
from '../Controllers/UserController.js';

import { isAuthenticated } from '../Middlewares/auth.js';
import singleupload from '../Middlewares/multer.js';

router.route('/register').post( singleupload,register)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/me').get(isAuthenticated,getMyProfile)

router.route('/changepassword')
.put(isAuthenticated,changepassword)
router.route('/updateprofile')
.put(isAuthenticated,updateprofile)

router.route('/updateprofilepicture')
.put(isAuthenticated,singleupload,updateprofilepicture)

router.route('/forgetpassword').post(forgetpassword)
router.route('/resetpassword/:token').put(resetpassword)


//add to Playlist

router.route('/addtoPlaylist').post(isAuthenticated,addtoPlaylist)
router.route('/removefromPlaylist').delete(isAuthenticated,removefromPlaylist)


export default router;