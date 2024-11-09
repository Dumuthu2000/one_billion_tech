import express from 'express'
import { createTask } from '../controllers/taskController.js';
const router = express.Router();
import { validateTask } from '../middlewares/taskValidator.js';

router.post('/create-task', validateTask, createTask);

export default router;