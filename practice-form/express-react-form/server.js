const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // Backend runs on port 5000

// Middleware
app.use(cors()); // Allow communication from a different origin
app.use(bodyParser.json()); // Parse JSON data in the request body

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { name, age } = req.body;
  console.log(`Name: ${name}, Age: ${age}`);
  res.json({ message: 'Form data received successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
