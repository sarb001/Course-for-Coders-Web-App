import express from 'express';
import { isAuthenticated } from '../Middlewares/auth.js';
import { buySubscription, paymentverification , razorpaykey } 
from '../Controllers/PaymentController.js';

const router = express.Router();

// Buy Subscription or Subscribe 

router.route('/subscribe').get(isAuthenticated,buySubscription)

// Verify Payment 

router.route('/paymentverification').post(isAuthenticated,paymentverification)

// Cancel Subscription 

router.route('/subscribe/cancel').delete(isAuthenticated,cancelSubscription)

// Get the RazorPay Key

router.route('/razorpaykey').get(razorpaykey)

export default router;