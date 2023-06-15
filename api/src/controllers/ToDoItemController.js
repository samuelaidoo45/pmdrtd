const TodoItem = require('../models/ToDoItem');

async function createTasks(req, res) {
    const { title, description,  } = req.body;
    const workTime = req.body.workTime ;
    const breakTime = req.body.breakTime ;

    const UserId = req.session.userId;

    const newTask = new TodoItem({ title, description, status: 'created', pomodoroCount: 0, workTime, breakTime, UserId});

    try {
        await newTask.save();
        return res.status(200).json({ message: 'Task created successfully', data: newTask });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong', error });
    }
}

async function getTasks(req, res) {
    try {

        const tasks = await TodoItem.findAll({ where: { UserId: req.session.userId } });

        return res.status(200).json({ message: 'Tasks fetched successfully', data: tasks });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong', error });
    }
}

//Delete a task
async function deleteTask(req, res) {
    const { id } = req.params;
    try {
        const task = await TodoItem.findOne({ where: { id } });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        await task.destroy();
        return res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong', error });
    }

}

module.exports = {
    createTasks,
    getTasks,
    deleteTask
};