import express from 'express';
const router = express.Router();

import { register, login, logout , getMyProfile ,
changepassword ,updateprofile , updateprofilepicture  , forgetpassword ,
 resetpassword , addtoPlaylist , removefromPlaylist ,getallusers , updateUserRole, deleteuser} 
from '../Controllers/UserController.js';

import { authorizeAdmin, isAuthenticated } from '../Middlewares/auth.js';
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


// Add to Playlist
router.route('/addtoPlaylist').post(isAuthenticated,addtoPlaylist)

// Remove from Playlist 
router.route('/removefromPlaylist').delete(isAuthenticated,removefromPlaylist)

// Admin Users ------gi
router.route('/admin/users').get( isAuthenticated ,authorizeAdmin ,getallusers)

router.route('/admin/user/:id')
.put(isAuthenticated,authorizeAdmin,updateUserRole)
.delete(isAuthenticated,authorizeAdmin ,deleteuser)

export default router;