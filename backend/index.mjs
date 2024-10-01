// backend/index.mjs
import express from 'express';
import multer from 'multer';
import { nanoid } from 'nanoid';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import fs from 'fs';
import { exec } from 'child_process'; // For virus scanning (optional)

// Load environment variables
dotenv.config();

// For __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Configure CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://192.168.1.13:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Configure Multer for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 1024 * 1024 * 1024 }, // 1GB
  fileFilter: (req, file, cb) => {
    console.log('Incoming file MIME type:', file.mimetype); // Debugging line
    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'application/pdf',
      'application/zip',
      'application/vnd.microsoft.portable-executable', // .exe
      'application/octet-stream', // .dll (commonly used)
      'application/x-rar-compressed',
      'application/x-7z-compressed',
      'application/x-tar',
      'application/gzip',
      'application/x-iso9660-image',
      // Add more MIME types as needed
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'), false);
    }
  },
});

// In-memory storage for demo purposes
const files = {};

// Rate Limiting (Optional but Recommended)
const uploadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 uploads per windowMs
  message: 'Too many uploads from this IP, please try again later.',
});

// Upload Endpoint
app.post('/upload', uploadLimiter, upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }

  const id = nanoid();
  files[id] = {
    path: path.resolve(__dirname, req.file.path),
    originalName: req.file.originalname,
  };
  res.json({ link: `${process.env.BACKEND_URL}/file/${id}` });
});

// Download Endpoint
app.get('/file/:id', (req, res) => {
  const file = files[req.params.id];
  if (file) {
    res.download(file.path, file.originalName, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error downloading file.');
      }
    });
  } else {
    res.status(404).send('File not found');
  }
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => { // Listen on all network interfaces
  console.log(`Server started on port ${PORT}`);
});
