import { Task } from "../models/task.js";

export const createTask = async (req, res, next) => {
  const { title, description } = req.body;

  const task = await Task.create({ title, description, user: req.user });

  res.status(200).json({
    success: true,
    message: "Task added successfully",
  });
};

export const getMyTasks = async (req, res) => {
  const userId = req.user._id;

  const tasks = await Task.find({ user: userId });
  res.status(200).json({
    success: true,
    tasks,
  });
};

export const updateTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);
  task.isCompleted = !task.isCompleted;
  await task.save();
  res.status(200).json({
    success: true,
    message: "task updated successfully",
  });
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  if(!task) return res.status(404).json({
    success:false,
    message: "Task not found"
  })


  await task.deleteOne();
  res.status(200).json({
    success: true,
    message: "task deleted successfully",
  });
};
