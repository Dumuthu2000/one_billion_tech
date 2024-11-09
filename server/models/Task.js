import sequelize from "../config/dbConfig";
import { DataTypes } from "sequelize";
import User from './User.js'

const Task = sequelize.define('Task',{
    taskId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    isComplete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    //References for a users table
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
},{
    tableName: 'tasks',
    underscored: true,
    timestamps: true, // For adding createdAt and updatedAt for each coulumn
});

module.exports = Task;