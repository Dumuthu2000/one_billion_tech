# User Management & To-Do Dashboard

This project is an assignment to demonstrate skills in front-end and back-end development, focusing on creating a responsive user interface with a user registration and authentication system. It includes a dashboard with a to-do list feature, enabling users to manage tasks efficiently. This project combines design and programming to bridge the gap between the front-end and back-end, ensuring a seamless user experience.

## 🔌Features

1. **User Management**
   - User registration
   - User login
   - Forgot password (email verification process)
   - Dashboard with user information view
   - Change password functionality
   - Logout option

2. **To-Do List Functionality**
   - Create, update, and delete tasks
   - View all tasks with sorting options by date and time
   - Highlight today's tasks

## 🔰Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express

**Database:** MySQL with Sequelize (ORM)

## ⚡Getting Started

To run this application on your computer, follow these steps.

### 📓Prerequisites

Ensure you have the following installed:
- **Node.js** and **npm**: [Download here](https://nodejs.org/)
- **MySQL**: [Download here](https://dev.mysql.com/downloads/)
- **Git**: [Download here](https://git-scm.com/)


## 🔩Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dumuthu2000/one_billion_tech.git

2. **Navigate to the server directory:**
   ```bash
   cd server
   npm install

3. **Navigate to the client directory:**
   ```bash
   cd client
   npm install

## 📦Environment Variables

The following environment variables are used in the application. Please ensure to create two .env files for server and client
### Server Configuration
- `PORT`:  Port on which the server will run.
  
#### Database Configuration
- `DB_HOST`:  Host of the database.
- `DB_USER`:  Database username.
- `DB_PASSWORD`:  Database password.
- `DB_NAME`:   Name of the database.

#### Security Configuration
- `HASHING_PASSWORD_SALTROUNDS`:  The number of salt rounds for password hashing.
- `JWT_SECRET_KEY`: Secret key for signing JWT tokens.

#### Email Configuration
- `EMAIL_HOST`:  SMTP host for email services.
- `EMAIL_PORT`:  Port for email SMTP.
- `EMAIL_USER`:  Email service username.
- `EMAIL_PASSWORD`:  Email service password.

### Client Configuration
#### Backend URL Configuration
- `VITE_BASE_URL`: URL for server.

## 🔥Environment Setup

To configure your environment variables, follow these steps:

1. **Copy the Sample Environment Files**:
   - For **Server**: Copy the `env.sample` file to `.env` in the server directory.
   - For **Client**: Copy the `env.sample` file to `.env` in the client directory.

2. **Set the Environment Variables**:
   Open the `.env` files in both the server and client directories and replace the placeholders with your actual values for the configuration settings (e.g., database credentials, email configuration, JWT secret key).

### MailTrap Setup for Password Reset Emails

The Forgot Password feature uses MailTrap to send password reset emails. To enable this feature, you need to replace the `EMAIL_USER` and `EMAIL_PASSWORD` values in your `.env` file with your own MailTrap credentials:

#### Steps to Set Up MailTrap:

1. **Create a MailTrap Account**:
   - Sign up at [MailTrap](https://mailtrap.io/) if you don’t have an account.

2. **Set Up an Inbox**:
   - After logging in, create a new inbox or select an existing one.

3. **Copy Your SMTP Credentials**:
   - Go to your inbox's SMTP Settings and copy the username and password values.

4. **Update `.env` File**:
   - Replace `<your-mailtrap-username>` and `<your-mailtrap-password>` in your server `.env` file with your MailTrap credentials:

   ```env
   EMAIL_USER= <your-mailtrap-username>
   EMAIL_PASSWORD= <your-mailtrap-password>

## Database Setup

To set up the database on your computer, follow these steps:

### Option 1: Directly Create a New Database and Run SQL Queries

You can create a new database and import the SQL queries directly from the `server/scripts/todo-list-one-billion-tech.sql` file.

1. **Create a New Database**:
   - Open your MySQL client (such as MySQL Workbench, phpMyAdmin, or the MySQL command line).
   - Run the following SQL command to create a new database:
     ```sql
     CREATE DATABASE todo-list-one-billion-tech;
     ```

2. **Import the SQL File**:
   - After creating the new database (`todo-list-one-billion-tech`), you can directly import the SQL queries from the `server/scripts/todo-list-one-billion-tech.sql` file.
   
   - To do this, use the following SQL command in your MySQL client:
     ```sql
     SOURCE /path/to/your/project/server/database/db.sql;
     ```
     - Replace `/path/to/your/project/` with the actual path to your project directory.

3. **Verify the Import**:
   - After running the queries, check that the tables and data have been correctly created in the `myDb` database.
   - You can do this by listing the tables in your database:
     ```sql
     SHOW TABLES;
     ```

4. **Configure Your `.env` File**:
   - Update your `.env` file in the **server directory** with the database connection details to match the newly created database:
     ```env
     DB_HOST= 'localhost'
     DB_USER= 'root'
     DB_PASSWORD= ''
     DB_NAME= 'todo-list-one-billion-tech'
     ```
   - Save the `.env` file after updating the database details.

Once the database is set up and the `.env` file is configured, you can proceed to run the server and client applications.



### Option 2: Using XAMPP (PHPMyAdmin)

1. **Install XAMPP**:
   If you don’t have XAMPP installed, download and install it from [here](https://www.apachefriends.org/index.html). XAMPP comes with MySQL and PHPMyAdmin, which makes it easy to manage databases.

2. **Start the MySQL Server**:
   Open the XAMPP Control Panel and start the **MySQL** service.

3. **Access PHPMyAdmin**:
   - Open your browser and go to [http://localhost/phpmyadmin](http://localhost/phpmyadmin).
   - Create a new database by clicking on the "Databases" tab and entering a name for your database.

4. **Import the SQL File**:
   - After creating the database, select it from the left sidebar.
   - Click on the "Import" tab at the top.
   - In the "File to Import" section, click "Choose File" and select the `todo-list-one-billion-tech.sql.sql` file located in the `server/scripts` folder of your project.
   - Click "Go" to start the import process.

5. **Verify the Import**:
   - After the import is complete, you should see the tables created in the selected database. You can check the tables by clicking on the database name in the left sidebar.

6. **Configure Your `.env` File**:
   - Update your `.env` file with the database connection details:
   
   ```env
   DB_HOST = 'localhost'
   DB_USER = 'root'
   DB_PASSWORD = ''
   DB_NAME = 'todo-list-one-billion-tech'

## 🚀Run The Application
1. **Start Backend:**
   ```bash
   npm start

2. **Start Frontend:**
   ```bash
   npm run dev

3. **Open The Applicatio:**
   ```bash
   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ➜  press h + enter to show help


## 🌟Acknowledgements
I would like to acknowledge and thank the following resources, libraries, and contributors for their support:

- **[Node.js](https://nodejs.org/)** - For building the backend of this project.
- **[React.js](https://reactjs.org/)** - For creating the frontend of this project.
- **[MySQL](https://www.mysql.com/)** - Used for the database management.
- **[Express.js](https://expressjs.com/)** - For building the RESTful API.
- **[Sequelize](https://sequelize.org/)** - For Object Relational Mapping (ORM) between Node.js and MySQL database.
- **[MailTrap](https://mailtrap.io/)** - Used for sending password reset emails during development.
- **[XAMPP](https://www.apachefriends.org/index.html)** - For local development and testing with MySQL.
- **[bcrypt](https://www.npmjs.com/package/bcrypt)** - For password hashing and security.
- **[JWT](https://jwt.io/)** - For generating and verifying JSON Web Tokens for secure authentication.
- **[Crypto](https://nodejs.org/api/crypto.html)** - For generating secure tokens, including for password reset functionality.


## Screenshots

![dashboard](https://github.com/user-attachments/assets/7c77dfc6-42d1-4956-ad49-b845d3b73e03)

