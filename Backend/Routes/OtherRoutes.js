import express from 'express';

import { authorizeAdmin, isAuthenticated } from '../Middlewares/auth.js';
import { contact , courserequest ,getdashboardstats } from '../Controllers/OtherController.js';

const router = express.Router();

router.route('/contact').post(contact);

router.route('/courserequest').post(courserequest);

router
.route('/courserequest')
.get(isAuthenticated,authorizeAdmin ,getdashboardstats);

export default  router;