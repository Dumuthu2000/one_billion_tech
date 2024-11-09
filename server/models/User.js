import sequelize from '../config/dbConfig';
import { DataTypes } from 'sequelize';

//Creating user model for users table
const User = sequelize.define('User',{
    userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    confirmPassword: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    tableName: 'users',
    underscored: true,
    timestamps: true // For adding createdAt and updatedAt for each coulumn
});

module.exports = User;