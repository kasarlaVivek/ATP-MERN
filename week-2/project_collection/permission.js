import { roles } from './data.mjs';
export const allRoles = Object.keys(roles);
export const canStudentDelete = roles.student.includes("delete");
export const uniquePermissions = [...new Set(Object.values(roles).flat())];
export const newRoles = { ...roles, moderator: ["view", "update"] };
console.log(allRoles);
console.log(canStudentDelete);
console.log(uniquePermissions);