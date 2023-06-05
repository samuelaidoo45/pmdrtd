const express = require('express');
const routers = express.Router();
const UserController = require('../controllers/UserController');
const ToDoItemController = require('../controllers/ToDoItemController');

// POST /login
routers.get('/createTasks', ToDoItemController.createTasks);

module.exports = routers;
