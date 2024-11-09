import Task from "../models/Task.js";
import { validationResult } from 'express-validator';

export const createTask=async(req, res)=>{
    //Check validations
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors.array()
        });
    }
    try {
        const task = await Task.create({...req.body, user_id: req.user.id});
        
        //return success created task
        return res.status(201).json({
            success: true,
            message: 'Task created successfully',
            data: task
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        }); 
    }
}