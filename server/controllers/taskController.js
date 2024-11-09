import Task from "../models/Task.js";
import { validationResult } from 'express-validator';

export const createTask=async(req, res)=>{
    //Check validations
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()});
    }
    try {
        const task = await Task.create(req.body);
        //Check task is empty
        if(!task){
            return res.status(400).json({error: "Failed to create task"});
        }
        return res.status(201).json(task);
    } catch (error) {
        return res.status(500).json("Server error"); 
    }
}