import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//Routes

//Server starting
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is started on port ${PORT}`)
})  