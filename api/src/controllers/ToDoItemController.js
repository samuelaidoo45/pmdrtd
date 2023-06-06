const TodoItem = require('../models/ToDoItem');

async function createTasks(req, res) {
    const { title, description } = req.body;
    console.log(req.body);
    const newTask = new TodoItem({ title, description });

    try {
        await newTask.save();
        return res.status(200).json({ message: 'Task created successfully', data: newTask });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong', error });
    }
}

async function getTasks(req, res) {
    try {
        const tasks = await TodoItem.findAll();
        return res.status(200).json({ message: 'Tasks fetched successfully', data: tasks });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong', error });
    }
}

module.exports = {
    createTasks,
    getTasks
};