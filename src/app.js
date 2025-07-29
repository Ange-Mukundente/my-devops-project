// src/app.js

const express = require('express');
const path = require('path');

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
// Set the path to the views directory
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files (if you had any, like CSS)
app.use(express.static('public'));

/**
 * @route GET /
 * @description Serves the home page of the application.
 * @access Public
 */
app.get('/', (req, res) => {
    // This message will be displayed on the webpage.
    // You will change this text to demonstrate the CD pipeline.
    const message = "Welcome to the Production Environment!";
    res.render('index', { message: message });
});

// Start the server only if this file is run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

// Export the app for testing purposes
module.exports = app;