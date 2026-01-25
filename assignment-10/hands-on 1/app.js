import { addTask, getAllTasks, completeTask } from './task.js';

console.log("\n=== ADD TASKS ===");
console.log(addTask("Learn JS", "high", "2030-05-01"));
console.log(addTask("AI Project", "medium", "2028-03-10"));
console.log(addTask("R", "low", "2028-02-02")); // invalid (title too short)

console.log("\n=== ALL TASKS ===");
console.log(getAllTasks());

console.log("\n=== COMPLETE TASK 1 ===");
console.log(completeTask(1));

console.log("\n=== UPDATED TASKS ===");
console.log(getAllTasks());
