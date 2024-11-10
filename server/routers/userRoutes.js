import { changePassword } from '../controllers/userController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

//Change password from email route
router.patch('/change-password', verifyToken, changePassword);