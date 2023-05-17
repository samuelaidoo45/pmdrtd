const express = require('express');
const userRoutes = require('./routes/userRoutes');
const toDoItemRoutes = require('./routes/toDoItemRoutes');

const app = express();

//middlewares
app.use('/api/user', userRoutes);
app.use('/api/todo',toDoItemRoutes);


const port = 5000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
