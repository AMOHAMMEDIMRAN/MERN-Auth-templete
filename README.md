# **Login and Signup Project Documentation (MERN Stack)**

### **Project Structure**
- `frontend/`: React-based frontend.
- `backend/`: Express-based backend (in the root).
- `.env`: Environment variables.

---

## **Prerequisites**

Ensure you have the following installed:

- **Node.js**: [Download here](https://nodejs.org/)  
- **Visual Studio Code (VS Code)**: [Download here](https://code.visualstudio.com/)  

---

## **Project Setup**

### 1. **Extract the ZIP File**
- Download and extract the project ZIP file.

### 2. **Open the Project in VS Code**
- Open the extracted project folder.

### 3. **Add Environment Variables**
- In the root directory, create a `.env` file and add the following variables:
  
  ```env
  MONGO_URI=your_mongodb_uri_here
  PORT=5000
  JWT_SECRET=your_jwt_secret_here
  ```

> **Note:** Replace `your_mongodb_uri_here` and `your_jwt_secret_here` with your actual values.

---

## **Installing Dependencies**

1. Open the VS Code terminal and run:
   ```bash
   npm install
   ```

This command will install the root-level dependencies as well as set up the project scripts.

---

## **Running the Project**

### **Single Command (Both Frontend & Backend)**
To run both the frontend and backend simultaneously, use:
```bash
npm run dev
```

### **Individual Commands**
If needed, you can run them separately:

#### Backend:
```bash
npm run backend
```

#### Frontend:
```bash
npm run frontend
```

---

## **Folder Structure Overview**
```
root/
├── backend/
│   └── index.js (backend entry point)
├── frontend/
├── .env
├── package.json (root scripts and dependencies)
└── node_modules/
```

---

## **Dependencies Used**

### **Backend**
- **bcryptjs**: Password hashing
- **cookie-parser**: Parse cookies
- **cors**: Handle CORS errors
- **dotenv**: Environment variables
- **express**: Server framework
- **express-async-handler**: Simplify async route handlers
- **jsonwebtoken**: Secure token-based authentication
- **mongoose**: MongoDB connection
- **nodemon**: Auto-restart server

### **Frontend**
- **axios**: HTTP requests
- **react**: Frontend framework
- **react-dom**: Rendering DOM elements
- **react-icons**: Icon library
- **react-router-dom**: Routing in React

---

## **Additional Notes**
- Ensure MongoDB is running and accessible.
- Double-check your `.env` file for proper backend configurations.
- If any errors occur, make sure CORS settings are correctly configured.

Would you like me to generate this in Markdown format for easy sharing?