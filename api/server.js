const express = require('express');
const app = express();

app.get('/api/login', (req, res) => {
    // Handle the request and send a response
    
  });

const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
