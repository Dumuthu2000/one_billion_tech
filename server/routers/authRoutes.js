import express from 'express';
import { loginUser, registerUser, requestPasswordReset } from '../controllers/authController.js';
import { validateUser } from '../middlewares/authValidator.js';

const router = express.Router();

//Route to user registration
router.post('/register',validateUser,registerUser);
//Route to user login
router.post('/login',validateUser,loginUser);
//request reset password from email route
router.post('/reset-password',validateUser,requestPasswordReset);

export default router;