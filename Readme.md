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

## Database Setup Instructions (MySQL)

### Download and Install MySQL
1. Download MySQL from the [official MySQL website](https://dev.mysql.com/downloads/installer/).
2. Run the installer and follow the setup steps:
   - Select **Server Only** setup for minimal installation.
   - Set up a **root password** (you'll need this later).

### Start the MySQL Server
1. Start the MySQL server:

   - **On Windows**: 
     - Open the **Start Menu** and search for **Services**.
     - In the Services window, find **MySQL** (or **MySQL80** for MySQL 8.0).
     - Right-click and select **Start** to start the MySQL server.

   - **On macOS**: 
     - If you installed MySQL through the **DMG installer**, go to **System Preferences** and click on **MySQL**.
     - Click **Start MySQL Server**.
     - If you installed it using **Homebrew**, run the following command in the terminal:
       ```bash
       brew services start mysql
       ```

   - **On Linux**:
     - Use the following command in the terminal:
       ```bash
       sudo service mysql start
       ```
     - Alternatively, if you're using `systemctl`:
       ```bash
       sudo systemctl start mysql
       ```

     ```

### Open MySQL Command Line
1. Open a terminal or command prompt, and log in with the root user:
   ```bash
   mysql -u root -p

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
Sign In
![login](https://github.com/user-attachments/assets/b9e14099-0040-4646-adb0-0a2dafd8df34)

Sign Up
![signup](https://github.com/user-attachments/assets/5e46e974-9332-4b7c-b6bf-6c5f84195500)

Dashaord
![dashboard](https://github.com/user-attachments/assets/7c77dfc6-42d1-4956-ad49-b845d3b73e03)

Add New Todo
![addTodo](https://github.com/user-attachments/assets/6caecd2c-ba54-40fb-952d-2bd31bead8e5)

Edit Todo
![editTask](https://github.com/user-attachments/assets/e865bc2b-bb20-4692-9536-1febaa466d81)

User Profile
![userProfile](https://github.com/user-attachments/assets/2cb06d86-480e-4d24-a4dd-f42e2fe88d88)

Change Password
![changePassword](https://github.com/user-attachments/assets/2a5ccc22-a2f0-4b94-9917-c0c9ed1d83e0)

Forgot Password
![forgotPassword](https://github.com/user-attachments/assets/66ca5f4a-ece2-410a-b615-ba8386c9236a)

Sent Email
![emailServer](https://github.com/user-attachments/assets/22edc235-b6ff-43f1-a355-4851fa21bcea)

Reset Password
![resetPassword](https://github.com/user-attachments/assets/78d07f9a-d3e7-4fc7-b77b-2a54efa57930)

Mobile Responsive 
![mobileView](https://github.com/user-attachments/assets/c2465687-f97b-4ecf-931e-de762fe31c9c)
