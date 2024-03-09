const Task = require("../model/taskModel");
const TasksController = {};

TasksController.getAllTasks = async(req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({tasks});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

TasksController.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

TasksController.getSingleTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById({_id: taskId});
    if(!task){
      return res.status(404).json({message: `No task with id: ${taskId}`})
    }
    res.status(200).json({task});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

TasksController.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByIdAndUpdate({_id: taskId}, req.body, {new: true, runValidators: true});
    if(!task){
      return res.status(404).json({message: `No task with id: ${taskId}`})
    }
    res.status(200).json({task});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

TasksController.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByIdAndDelete({_id: taskId});
    if(!task){
      return res.status(404).json({message: `No task with id: ${taskId}`})
    }
    res.status(200).json({status: 'success'});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

module.exports = TasksController;
