import express from 'express';
import { isAuthenticated } from '../Middlewares/auth.js';
import { buySubscription } from '../Controllers/PaymentController.js';

const router = express.Router();

router.route('/subscribe').get(isAuthenticated,buySubscription)

export default router;