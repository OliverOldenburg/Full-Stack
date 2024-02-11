const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes.js'); 

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/contact';

// Define CORS options
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 
};

// Enable CORS for specific route
app.get('/contact/.', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is a cors enabled function'});
});

// Apply CORS globally
app.use(cors());

// Import contactRoutes
app.use('/', contactRoutes);

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start Express server once connected to MongoDB
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
