import express from 'express';
import {
  loginUser,
  logout,
  registerUser,
  requestPasswordReset,
  resetPassword,
  verifyAuth
} from '../controllers/authController.js';
import {
  validateRegisterUser,
  validateLoginUser
} from '../middlewares/authValidator.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

//Route to user registration
router.post('/register', validateRegisterUser, registerUser);
//Route to user login
router.post('/login', validateLoginUser, loginUser);
//request reset password from email route
router.post('/request-reset-password', requestPasswordReset);
//Reset password from email route
router.post('/reset-password', resetPassword);
//Reset password from email route
router.post('/logout', verifyToken, logout);
// Verifying user auth route
router.get('/verify', verifyToken, verifyAuth);

export default router;
