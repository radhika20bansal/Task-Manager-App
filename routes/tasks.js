const express = require('express');
const TasksController = require('../controller/taskController');
const taskRouter = express.Router();

taskRouter.get('/', TasksController.getAllTasks);
taskRouter.post('/', TasksController.createTask);
taskRouter.get('/:id', TasksController.getSingleTask);
taskRouter.patch('/:id', TasksController.updateTask);
taskRouter.delete('/:id', TasksController.deleteTask);

module.exports = taskRouter;