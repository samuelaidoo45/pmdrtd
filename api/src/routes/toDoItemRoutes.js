const express = require('express');
const routers = express.Router();
const ToDoItemController = require('../controllers/ToDoItemController');


routers.post('/createTasks', ToDoItemController.createTasks);
routers.get('/getTasks', ToDoItemController.getTasks);
//delete tasks
routers.delete('/deleteTask/:id', ToDoItemController.deleteTask);

module.exports = routers;
