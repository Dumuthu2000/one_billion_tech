import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//User register
export const registerUser=async(req, res)=>{
    const {username, email, password} = req.body;

    try {
        //Check any user already registered using same email
        let user = await User.findOne({where: {email:email}});
        if(user){
            return res.status(400).json({error: "User already exists"});
        }

        //Accessing saltRounds from .env
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.HASHING_PASSWORD_SALTROUNDS));

        //Adding user data to the users table
        user = await User.create({username, email, password:hashedPassword});

        //Create jwt token
        const payload = {id: user.userId};
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: '1hr'});

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
    const {email, password} = req.body;

    try {
        //Check email as user credentials
        const user = await User.findOne({where: {email:email}});
        if(!user){
            return res.status(400).json({error: "Invalid credentials"});
        }

        //Check password as user credentials
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({error: "Invalid credentials"});
        }

        //Create jwt token
        const payload = {id: user.userId};
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: '1hr'});

        return res.status(201).json({
            token, 
            user:{id: user.userId, email}, 
            message:"User is logged successfully",
        });

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error: "Server error"});
    }
}