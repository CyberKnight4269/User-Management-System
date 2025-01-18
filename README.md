# User Management System

A secure and scalable **User Management System** built using **Node.js**, **Express.js**, and **MongoDB**, designed for user registration, authentication, and profile management with role-based access control for Super Admins.

## Features

### User Features
- **Register**: Users can create an account with their name, email, password, and phone number.
- **Login**: Users can log in and receive a **JWT access token** and a **refresh token**.
- **Profile Management**:
  - View personal details (name, email, phone number).
  - Update profile information, including password.
- **Account Deactivation**: Users can deactivate their accounts, preventing further logins.

### Super Admin Features
- **View All Users**: Super Admins can fetch details of all registered users.
- **Manage Users**:
  - Update any user's details.
  - Deactivate or reactivate user accounts.

### Security
- **JWT Authentication**:
  - Access and refresh tokens for secure authentication.
  - Token expiration and regeneration.
- **Password Security**: Passwords are hashed using **bcrypt**.
- **Role-Based Access Control**: Middleware to restrict Super Admin-exclusive features.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose for schema modeling)
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcrypt

## Installation and Setup

### Prerequisites
- Node.js installed on your machine
- MongoDB instance (local or cloud-based)

### Steps
1. Fork this repository
2. Clone the repository:
   ```bash
   git clone <repository-url>
   cd user-management-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and configure the following variables:
   ```env
   PORT=3000
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   JWT_REFRESH_SECRET=<your-jwt-refresh-secret>
   ```
5. Start the server:
   ```bash
   npm start
   ```
6. The API will be available at `http://localhost:3000`.

## Folder Structure
```
user-management-system/
├── controllers/
│   ├── authController.js
│   ├── userController.js
|   ├── superAdminController.js
│
├── middlewares/
│   ├── authMiddleware.js
│
├── models/
│   ├── user.js
│
├── routes/
│   ├── authRoute.js
│   ├── userRoute.js
│   ├── superAdminRoute.js
│
├── config/
│   ├── db.js
│
├── server.js
├── package.json
├── .env
└── README.md
```

## API Endpoints

### Auth Routes
- **POST /api/auth/register**: Register a new user and receive access/refresh tokens.
- **POST /api/auth/login**: Login and receive access/refresh tokens.

### User Routes
- **GET /api/user/profile**: View user profile (requires authentication).
- **PUT /api/user/update**: Update user profile (requires authentication).
- **PATCH /api/user/deactivate**: Deactivate the user account (requires authentication).

### Admin Routes
- **GET /api/admin/users**: Get details of all users (requires Super Admin access).
- **PUT /api/admin/promote/:userId**: Promote a user to Super Admin (requires Super Admin access).
- **GET /api/admin/user/:userId**: Get the details of a single user via User Id (requires Super Admin access).
- **PUT /api/admin/update/:userId**: Update user details via User Id (requires Super Admin access).

---

Feel free to contribute or provide feedback to enhance this system further!
