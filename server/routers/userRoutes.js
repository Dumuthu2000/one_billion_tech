import { changePassword, fetchUserData } from '../controllers/userController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
import router from './authRoutes.js';

//Fetch user data who is logged-in
router.get('/users', verifyToken, fetchUserData);
//Change password from email route
router.patch('/change-password', verifyToken, changePassword);


export default router;