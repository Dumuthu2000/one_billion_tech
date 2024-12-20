import sequelize from '../config/dbConfig.js';
import { DataTypes } from 'sequelize';

//Creating user model for users table
const User = sequelize.define(
  'User',
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    resetToken: {
      type: DataTypes.STRING,
      allowNull: true
    },
    resetTokenExpirey: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    tableName: 'users',
    underscored: true,
    timestamps: true // For adding createdAt and updatedAt for each coulumn
  }
);

export default User;
