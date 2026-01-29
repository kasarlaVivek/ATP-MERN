import { users } from './data.mjs';
export const activeUsers = users.filter(u => u.active);
export const activeNames = activeUsers.map(u => u.name);
export const hasAdmin = users.some(u => u.role === "admin");
export const findUser = (id) => users.find(u => u.id === id);
export const updatedUsers = users.map(u => u.id === 1 ? { ...u, active: false } : u);
console.log(activeNames);
console.log(hasAdmin);