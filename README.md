<h1 align="center">AnonFiles v2</h1>

<p align="center">
  <strong>AnonFiles v2</strong> is a secure and efficient file hosting service that allows users to upload and share files anonymously. Built with a <strong>Node.js</strong> backend using <strong>Express</strong> and a <strong>React</strong> frontend, this application ensures seamless file management, robust security measures, and a user-friendly interface.
</p>

<div align="center">
  <img src="assets/logo.png" alt="AnonFiles v2 Logo" width="200"/>
</div>

<h2>📋 Table of Contents</h2>
<ul>
  <li><a href="#features">Features</a></li>
  <li><a href="#technologies-used">Technologies Used</a></li>
  <li><a href="#demo">Demo</a></li>
  <li><a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#environment-variables">Environment Variables</a></li>
    </ul>
  </li>
  <li><a href="#running-the-application">Running the Application</a>
    <ul>
      <li><a href="#backend">Backend</a></li>
      <li><a href="#frontend">Frontend</a></li>
    </ul>
  </li>
  <li><a href="#api-endpoints">API Endpoints</a></li>
  <li><a href="#project-structure">Project Structure</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

<h2>✨ Features</h2>
<ul>
  <li>📂 <strong>Anonymous File Uploads:</strong> Upload files without the need for an account.</li>
  <li>🔒 <strong>Secure File Storage:</strong> Files are stored securely on the server with unique identifiers.</li>
  <li>✅ <strong>File Validation:</strong> Only allowed file types are accepted, ensuring security and integrity.</li>
  <li>🚫 <strong>Rate Limiting:</strong> Prevents abuse by limiting the number of uploads per IP address.</li>
  <li>🌐 <strong>CORS Configuration:</strong> Allows requests from specified frontend origins.</li>
  <li>🐞 <strong>Error Handling:</strong> Comprehensive error handling for better reliability and user feedback.</li>
  <li>📈 <strong>Scalable Architecture:</strong> Designed to handle large files (up to 1GB) efficiently.</li>
</ul>

<h2>🛠️ Technologies Used</h2>

<h3>Backend</h3>
<ul>
  <li><strong>Node.js</strong> - JavaScript runtime.</li>
  <li><strong>Express</strong> - Web framework for Node.js.</li>
  <li><strong>Multer</strong> - Middleware for handling <code>multipart/form-data</code> (file uploads).</li>
  <li><strong>nanoid</strong> - For generating unique IDs.</li>
  <li><strong>CORS</strong> - Middleware for enabling Cross-Origin Resource Sharing.</li>
  <li><strong>dotenv</strong> - Loads environment variables from a <code>.env</code> file.</li>
  <li><strong>express-rate-limit</strong> - Rate-limiting middleware for Express.</li>
  <li>Other Libraries: <code>path</code>, <code>fs</code>, <code>child_process</code>, etc.</li>
</ul>

<h3>Frontend</h3>
<ul>
  <li><strong>React</strong> - JavaScript library for building user interfaces.</li>
  <li>Other Libraries: (Assumed based on standard React setup)</li>
</ul>

<h3>Development Tools</h3>
<ul>
  <li><strong>Git</strong> - Version control system.</li>
  <li><strong>GitHub</strong> - Repository hosting service.</li>
  <li><strong>VS Code</strong> - Code editor (optional).</li>
</ul>

<h2>🎥 Demo</h2>
<p>Add a link to a live demo or include screenshots to showcase the application.</p>

<div>
  <img src="assets/upload_screenshot.png" alt="Upload Screenshot" width="600"/>
  <img src="assets/download_screenshot.png" alt="Download Screenshot" width="600"/>
</div>

<h2>🚀 Getting Started</h2>

<h3>📋 Prerequisites</h3>
<p>Ensure you have the following installed on your system:</p>
<ul>
  <li><strong>Node.js</strong> (v14 or higher) - <a href="https://nodejs.org/">Download Here</a></li>
  <li><strong>npm</strong> (comes with Node.js) or <strong>Yarn</strong> - <a href="https://classic.yarnpkg.com/en/docs/install">Yarn Installation Guide</a></li>
  <li><strong>Git</strong> - <a href="https://git-scm.com/downloads">Download Here</a></li>
</ul>

<h3>🛠️ Installation</h3>
<ol>
  <li><strong>Clone the Repository</strong>
    <pre><code>git clone https://github.com/av1ast/anonfiles_v2.git</code></pre>
  </li>
  <li><strong>Navigate to the Project Directory</strong>
    <pre><code>cd anonfiles_v2</code></pre>
  </li>
  <li><strong>Install Backend Dependencies</strong>
    <pre><code>cd backend
npm install</code></pre>
  </li>
  <li><strong>Install Frontend Dependencies</strong>
    <pre><code>cd ../frontend
npm install</code></pre>
  </li>
</ol>

<h3>📁 Environment Variables</h3>
<p>Create a <code>.env</code> file in both the <code>backend</code> and <code>frontend</code> directories with the necessary environment variables.</p>

<h4>Backend <code>.env</code></h4>
<pre><code>PORT=5000
FRONTEND_URL=http://localhost:3000
BACKEND_URL=http://localhost:5000
</code></pre>
<ul>
  <li><strong>PORT:</strong> Port on which the backend server will run.</li>
  <li><strong>FRONTEND_URL:</strong> The URL where the frontend is hosted.</li>
  <li><strong>BACKEND_URL:</strong> The URL where the backend is accessible.</li>
</ul>
<p><em>Ensure that <code>FRONTEND_URL</code> matches the origin from which your frontend is making requests.</em></p>

<h4>Frontend <code>.env</code></h4>
<pre><code>REACT_APP_BACKEND_URL=http://localhost:5000
</code></pre>
<ul>
  <li><strong>REACT_APP_BACKEND_URL:</strong> The backend server URL used by the React application to make API requests.</li>
</ul>
<p><em>Note: In React, environment variables must start with <code>REACT_APP_</code> to be accessible in the application.</em></p>

<h2>🏃‍♂️ Running the Application</h2>

<h3>Backend</h3>
<ol>
  <li><strong>Navigate to the Backend Directory</strong>
    <pre><code>cd backend</code></pre>
  </li>
  <li><strong>Start the Backend Server</strong>
    <pre><code>npm start</code></pre>
    <p>The server will start on the port specified in the <code>.env</code> file (default is <code>5000</code>).</p>
  </li>
</ol>

<h3>Frontend</h3>
<ol>
  <li><strong>Navigate to the Frontend Directory</strong>
    <pre><code>cd frontend</code></pre>
  </li>
  <li><strong>Start the Frontend Application</strong>
    <pre><code>npm start</code></pre>
    <p>The React application will start on <a href="http://localhost:3000">http://localhost:3000</a>.</p>
  </li>
</ol>
<p><em>Ensure that both the backend and frontend servers are running simultaneously for the application to function correctly.</em></p>

<h2>🔌 API Endpoints</h2>

<h3>1. Upload File</h3>
<ul>
  <li><strong>Endpoint:</strong> <code>/upload</code></li>
  <li><strong>Method:</strong> <code>POST</code></li>
  <li><strong>Description:</strong> Uploads a single file to the server.</li>
  <li><strong>Headers:</strong>
    <ul>
      <li><code>Content-Type: multipart/form-data</code></li>
    </ul>
  </li>
  <li><strong>Body:</strong>
    <ul>
      <li><code>file</code> (form-data) - The file to be uploaded.</li>
    </ul>
  </li>
  <li><strong>Response:</strong>
    <ul>
      <li><strong>Success (200):</strong>
        <pre><code>{
  "link": "http://localhost:5000/file/&lt;unique_id&gt;"
}
</code></pre>
      </li>
      <li><strong>Error (400/500):</strong>
        <pre><code>{
  "error": "Error message"
}
</code></pre>
      </li>
    </ul>
  </li>
</ul>

<h3>2. Download File</h3>
<ul>
  <li><strong>Endpoint:</strong> <code>/file/:id</code></li>
  <li><strong>Method:</strong> <code>GET</code></li>
  <li><strong>Description:</strong> Downloads the file associated with the provided unique ID.</li>
  <li><strong>Response:</strong>
    <ul>
      <li><strong>Success:</strong> Initiates file download.</li>
      <li><strong>Error (404/500):</strong> Displays error message.</li>
    </ul>
  </li>
</ul>

<h2>📂 Project Structure</h2>
<pre><code>anonfiles_v2/
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
├── assets/
│   ├── logo.png
│   ├── upload_screenshot.png
│   └── download_screenshot.png
├── .gitignore
├── README.md
└── LICENSE
</code></pre>

<h2>🤝 Contributing</h2>
<p>Contributions are welcome! Follow these steps to contribute to the project:</p>
<ol>
  <li><strong>Fork the Repository</strong></li>
  <li><strong>Clone the Forked Repository</strong>
    <pre><code>git clone https://github.com/your-username/anonfiles_v2.git
cd anonfiles_v2</code></pre>
  </li>
  <li><strong>Create a New Branch</strong>
    <pre><code>git checkout -b feature/YourFeature</code></pre>
  </li>
  <li><strong>Make Your Changes</strong></li>
  <li><strong>Commit Your Changes</strong>
    <pre><code>git commit -m "Add Your Feature"</code></pre>
  </li>
  <li><strong>Push to the Branch</strong>
    <pre><code>git push origin feature/YourFeature</code></pre>
  </li>
  <li><strong>Open a Pull Request</strong>
    <p>Describe your changes and submit the pull request for review.</p>
  </li>
</ol>
<p><em>Please ensure that your contributions adhere to the project guidelines and coding standards.</em></p>

<h2>📄 License</h2>
<p>This project is licensed under the <a href="LICENSE">MIT License</a>. You are free to use, modify, and distribute this project as per the terms of the license.</p>

<h2>📞 Contact</h2>
<p>For any questions, suggestions, or support, please contact:</p>
<ul>
  <li><strong>Name:</strong> Your Name</li>
  <li><strong>Email:</strong> your_email@example.com</li>
  <li><strong>GitHub:</strong> <a href="https://github.com/av1ast">av1ast</a></li>
</ul>
<p><em>Feel free to reach out for collaborations or any inquiries related to the project.</em></p>
