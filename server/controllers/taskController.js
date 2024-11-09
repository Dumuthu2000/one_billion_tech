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

    // Ensure req.user is available and contains the id
    if (!req.user || !req.user.id) {
        return res.status(400).json({
            success: false,
            message: 'User ID is missing or invalid.',
        });
    }
    try {
        const task = await Task.create({...req.body, userId: req.user.id});
        
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

//Fetch tasks created by login user
export const fetchTasks=async(req, res)=>{
    // Accessing user ID from the JWT token
    const userId = req.user.id;

    try {
        // Fetch tasks associated with the logged-in user
        const tasks = await Task.findAll({where: {userId}});

        // Check if no tasks are found
        if (tasks.length === 0) {
            return res.status(404).json({
                status: false,
                message: 'No tasks available for this user.',
            });
        };

        return res.status(200).json({
            status: true,
            message: 'Tasks fetched successfully.',
            data: tasks, 
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Internal server error",
            error: error.message,
        })
    }
}