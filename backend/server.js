const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const serviceRoutes = require('./routes/routes.js');
const connectDB = require('./config/db.js');

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Serve the 'uploads' folder statically
app.use('/uploads', express.static(path.join(__dirname, '../../citizenHelperService/theirno/public/uploads')));

// Set up storage engine for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../citizenHelperService/theirno/public/uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); // Rename file to avoid conflicts
  },
});

const upload = multer({ storage });

// Image upload route
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  
  // Correct the image URL to point to /uploads instead of /public/uploads
  const imageUrl = `/uploads/${req.file.filename}`;
  
  res.status(201).json({ imageUrl });
});

// Use service routes for other functionalities
app.use('/api/services', serviceRoutes);

// Base route for testing
app.get('/', (req, res) => {
  res.send('Hello from MERN stack!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
