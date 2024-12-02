import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import sequelize from './config/dbConfig.js';
import authRoutes from './routers/authRoutes.js';
import taskRoutes from './routers/taskRoutes.js';
import userRoutes from './routers/userRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();
const app = express();

//Middlewares
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);
app.use(cookieParser());
// app.use(errorHandler);

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/task', taskRoutes);

app.use(errorHandler)

//Sync sequelize models with the database
sequelize
  .sync()
  .then(() => {
    console.log('All the tables are created in the database');
  })
  .catch((err) => {
    console.log('Error creating tables', err.message);
  });

//Server starting
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
