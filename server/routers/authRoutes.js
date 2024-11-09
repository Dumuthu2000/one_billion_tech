import express from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';
import { validateLoginUser, validateRegisterUser } from '../middlewares/authValidator.js';

const router = express.Router();

//Route to user registration
router.post('/register',validateRegisterUser,registerUser);
//Route to user login
router.post('/login',validateLoginUser,loginUser);

export default router;