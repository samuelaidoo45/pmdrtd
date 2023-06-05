const TodoItem = require('../models/ToDoItem');

async function createTasks(req, res) {
    const { task, taskDescription } = req.body;

    console.log(task);
}

module.exports = {
    createTasks,
  };