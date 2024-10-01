AnonFiles v2
AnonFiles v2 is a secure and efficient file hosting service that allows users to upload and share files anonymously. Built with a Node.js backend using Express and a React frontend, this application ensures seamless file management, robust security measures, and a user-friendly interface.

Table of Contents
Features
Technologies Used
Demo
Getting Started
Prerequisites
Installation
Environment Variables
Running the Application
Backend
Frontend
API Endpoints
Project Structure
Contributing
License
Contact
Features
Anonymous File Uploads: Users can upload files without the need for an account.
Secure File Storage: Files are stored securely on the server with unique identifiers.
File Validation: Only allowed file types are accepted, ensuring security and integrity.
Rate Limiting: Prevents abuse by limiting the number of uploads per IP address.
CORS Configuration: Allows requests from specified frontend origins.
Error Handling: Comprehensive error handling for better reliability and user feedback.
Scalable Architecture: Designed to handle large files (up to 1GB) efficiently.
Technologies Used
Backend
Node.js - JavaScript runtime environment.
Express - Web framework for Node.js.
Multer - Middleware for handling multipart/form-data (file uploads).
nanoid - For generating unique IDs.
CORS - Middleware for enabling Cross-Origin Resource Sharing.
dotenv - Loads environment variables from a .env file.
express-rate-limit - Basic rate-limiting middleware for Express.
Other Libraries: path, fs, child_process, etc.
Frontend
React - JavaScript library for building user interfaces.
Other Libraries: (Assumed based on standard React setup)
Development Tools
Git - Version control system.
GitHub - Repository hosting service.
VS Code - Code editor (optional).
Demo
Provide screenshots or a link to a live demo if available.


Getting Started
Follow these instructions to set up the project locally.

Prerequisites
Ensure you have the following installed on your system:

Node.js (v14 or higher) - Download Here
npm (comes with Node.js) or Yarn - Yarn Installation Guide
Git - Download Here
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/av1ast/anonfiles_v2.git
Navigate to the Project Directory

bash
Copy code
cd anonfiles_v2
Install Backend Dependencies

bash
Copy code
cd backend
npm install
Install Frontend Dependencies

bash
Copy code
cd ../frontend
npm install
Environment Variables
Create a .env file in both the backend and frontend directories with the necessary environment variables.

Backend .env
Create a .env file inside the backend folder:

env
Copy code
PORT=5000
FRONTEND_URL=http://localhost:3000
BACKEND_URL=http://localhost:5000
PORT: Port on which the backend server will run.
FRONTEND_URL: The URL where the frontend is hosted.
BACKEND_URL: The URL where the backend is accessible.
Ensure that FRONTEND_URL matches the origin from which your frontend is making requests.

Frontend .env
Create a .env file inside the frontend folder:

env
Copy code
REACT_APP_BACKEND_URL=http://localhost:5000
REACT_APP_BACKEND_URL: The backend server URL used by the React application to make API requests.
Note: In React, environment variables must start with REACT_APP_ to be accessible in the application.

Running the Application
Backend
Navigate to the Backend Directory

bash
Copy code
cd backend
Start the Backend Server

bash
Copy code
npm start
The server will start on the port specified in the .env file (default is 5000).

Frontend
Navigate to the Frontend Directory

bash
Copy code
cd frontend
Start the Frontend Application

bash
Copy code
npm start
The React application will start on http://localhost:3000.

Ensure that both the backend and frontend servers are running simultaneously for the application to function correctly.

API Endpoints
1. Upload File
Endpoint: /upload
Method: POST
Description: Uploads a single file to the server.
Headers:
Content-Type: multipart/form-data
Body:
file (form-data) - The file to be uploaded.
Response:
Success (200):
json
Copy code
{
  "link": "http://localhost:5000/file/<unique_id>"
}
Error (400/500):
json
Copy code
{
  "error": "Error message"
}
2. Download File
Endpoint: /file/:id
Method: GET
Description: Downloads the file associated with the provided unique ID.
Response:
Success: Initiates file download.
Error (404/500): Displays error message.
Project Structure
bash
Copy code
anonfiles_v2/
├── backend/
│   ├── uploads/           # Directory where uploaded files are stored
│   ├── index.mjs         # Main backend application file
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── ...           # Other React components and files
│   ├── package.json
│   └── .env
├── .gitignore
├── README.md
└── LICENSE
Contributing
Contributions are welcome! Follow these steps to contribute to the project:

Fork the Repository

Clone the Forked Repository

bash
Copy code
git clone https://github.com/your-username/anonfiles_v2.git
cd anonfiles_v2
Create a New Branch

bash
Copy code
git checkout -b feature/YourFeature
Make Your Changes

Commit Your Changes

bash
Copy code
git commit -m "Add Your Feature"
Push to the Branch

bash
Copy code
git push origin feature/YourFeature
Open a Pull Request

Describe your changes and submit the pull request for review.

Please ensure that your contributions adhere to the project guidelines and coding standards.

License
This project is licensed under the MIT License. You are free to use, modify, and distribute this project as per the terms of the license.

Contact
For any questions, suggestions, or support, please contact:

Name: Your Name
Email: your_email@example.com
GitHub: av1ast
Feel free to reach out for collaborations or any inquiries related to the project.
