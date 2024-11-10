import express from 'express';
import { loginUser, registerUser, requestPasswordReset, resetPassword } from '../controllers/authController.js';
import { validateRegisterUser, validateLoginUser } from '../middlewares/authValidator.js';

const router = express.Router();

//Route to user registration
router.post('/register',validateRegisterUser,registerUser);
//Route to user login
router.post('/login',validateLoginUser,loginUser);
//request reset password from email route
router.post('/request-reset-password',requestPasswordReset);
//Reset password from email route
router.post('/reset-password',resetPassword);

export default router;