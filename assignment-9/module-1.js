const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];


// 1. Get only active users
const activeUsers = users.filter(u => u.active);

// 2. Extract names of active users
const activeUserNames = users.filter(u => u.active).map(u => u.name);

// 3. Check if any admin exists
let admin = users.filter(user => user.role === "admin")
// 4. Find user by id
const findUserById = id => users.find(u => u.id === id);

// 5. Deactivate a user immutably
const deactivateUser = id =>
  users.map(u => u.id === id ? { ...u, active: false } : u);

export {activeUserNames,activeUsers,admin,deactivateUser}
