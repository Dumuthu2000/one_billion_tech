import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import { hashingData, verifyHashingData } from "../utils/bcryptUtils.js";

//User register
export const registerUser=async(req, res)=>{
    //Check is any validation error are there
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {username, email, password} = req.body;

    try {
        //Check any user already registered using same email
        let user = await User.findOne({where: {email:email}});
        if(user){
            return res.status(400).json({error: "User already exists"});
        }

        //Accessing saltRounds from .env
        // const hashedPassword = await bcrypt.hash(password, parseInt(process.env.HASHING_PASSWORD_SALTROUNDS));
        const hashedPassword = await hashingData(password);

        //Adding user data to the users table
        user = await User.create({username, email, password:hashedPassword});

        //Create jwt token
        const payload = {id: user.userId};
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: '1hr'});

         //Setting up JWT token in cookie
         res.cookie('token', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 3600000) //Token expiretion time (1 hour)
        })

        return res.status(201).json({
            token, 
            user:{id: user.userId, username, email},
            message: "User is registered successfully"
        });

    } catch (error) {
        return res.status(500).json({error: "Server error"});
    }
};

//User Login
export const loginUser=async(req, res)=>{
    //Check is any validation error are there
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;

    try {
        //Check email as user credentials
        const user = await User.findOne({where: {email:email}});
        if(!user){
            return res.status(400).json({error: "Invalid credentials"});
        }

        //Check password as user credentials
        // const isMatch = await bcrypt.compare(password, user.password);
        const isMatch = await verifyHashingData(password, user.password);
        if(!isMatch){
            return res.status(400).json({error: "Invalid credentials"});
        }

        //Create jwt token
        const payload = {id: user.userId};
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: '1hr'});

        //Setting up JWT token in cookie
        res.cookie('token', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 3600000) //Token expiretion time (1 hour)
        })

        return res.status(201).json({
            status: true,
            token, 
            data:{id: user.userId, email}, 
            message:"User is logged successfully",
        });

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            status: false,
            message: "Internal server error",
            error: error.message
        });
    }
}

//Reset (forgot password) functionality
