const express = require('express');
const routers = express.Router();
// const UserController = require('../controllers/UserController');
const ToDoItemController = require('../controllers/ToDoItemController');

// POST /login
routers.post('/createTasks', ToDoItemController.createTasks);
routers.get('/getTasks', ToDoItemController.getTasks);

module.exports = routers;
