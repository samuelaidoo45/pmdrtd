const express = require('express');
const userRoutes = require('./routes/userRoutes');
const toDoItemRoutes = require('./routes/toDoItemRoutes');
const cors = require('cors');
const db = require('../config/database');

const session = require('express-session');
const crypto = require('crypto');
//const path = require('path');



const secret = crypto.randomBytes(64).toString('hex');


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
app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: false,
  })
);

app.get('/pomodoropal/api/hello',()=>{
  console.log("Hello World");
});

app.use('/pomodoropal/api/user', userRoutes);
app.use('/pomodoropal/api/todo',toDoItemRoutes);


const port = 5000; // Replace with your desired port number
app.listen(process.env.PORT || port);
