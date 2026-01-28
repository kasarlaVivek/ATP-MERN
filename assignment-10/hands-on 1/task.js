import { validateTitle, validatePriority, validateDueDate } from './validator.js';

let tasks = [];

// 1. Add new task
export function addTask(title, priority, dueDate) {
  if (!validateTitle(title)) return "Invalid title";
  if (!validatePriority(priority)) return "Invalid priority";
  if (!validateDueDate(dueDate)) return "Due date must be in the future";

  const newTask = {
    id: tasks.length + 1,
    title,
    priority,
    dueDate,
    completed: false
  };

  tasks = [...tasks, newTask]; // immutable push
  return "Task added successfully";
}

// 2. Get all tasks
export function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {
  tasks = tasks.map(t =>
    t.id === taskId ? { ...t, completed: true } : t
  );
  return "Task marked as complete";
}
