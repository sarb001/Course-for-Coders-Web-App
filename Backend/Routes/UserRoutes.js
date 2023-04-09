import express from 'express';
const router = express.Router();
import { register } from '../Controllers/UserController.js';


router.route('/register').post(register)

export default router;