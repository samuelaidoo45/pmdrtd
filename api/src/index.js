const express = require('express');
const userRoutes = require('./routes/userRoutes');
const toDoItemRoutes = require('./routes/toDoItemRoutes');
const cors = require('cors');
const db = require('../config/database');


const app = express();

db.authenticate()
  .then(() => {
    console.log('Database connected');
    return db.sync(); // Sync models with the database
  })
  .then(() => {
    console.log('Models synced');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
});

//middlewares
app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);
app.use('/todo',toDoItemRoutes);


const port = 5000; // Replace with your desired port number
app.listen(process.env.PORT || port);
