import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

//Create sequelize instance
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

//Check is sequelize is authenticated or not
sequelize.authenticate()
    .then(()=>{
        console.log("The database connection is succussfull")
    }).catch((err)=>{
        console.error("Error: ",err.message);
    })


export default sequelize;