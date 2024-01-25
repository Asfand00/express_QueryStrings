const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// GET route for handling query strings
app.get('/get', (req, res) => {
    // Access query string parameters using req.query
    const queryStringParams = req.query;
   
    // Log the query string parameters to the console
    console.log('Query String Parameters:', queryStringParams);
  
    // Send a response to the client
    res.send('Query String Parameters logged. Check the console.');
});

// 404 error handler
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});
  
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});