<<<<<<< HEAD
// Hands-on 1
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

console.log(user.name);
console.log(user.email);

user.lastLogin = "2026-01-01";

user.role = "admin";

delete user.isActive;

const keys = Object.keys(user);
console.log(keys);

// Hands-on 2
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
const total = Object.values(marks).reduce((sum, val) => sum + val, 0);
console.log("Total:", total);

const average = total / Object.values(marks).length;
console.log("Average:", average);

const [subject, score] = Object.entries(marks).reduce((max, curr) => {
  return curr[1] > max[1] ? curr : max;
});

marks.computer = 90;
console.log(marks);


// Hands-on 3
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};
settings.theme = settings.theme === "light" ? "dark" : "light";
console.log(settings.theme);

settings.autoSave = true;

delete settings.notifications;

Object.freeze(settings);
=======
// Hands-on 1
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

console.log(user.name);
console.log(user.email);

user.lastLogin = "2026-01-01";

user.role = "admin";

delete user.isActive;

const keys = Object.keys(user);
console.log(keys);

// Hands-on 2
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
const total = Object.values(marks).reduce((sum, val) => sum + val, 0);
console.log("Total:", total);

const average = total / Object.values(marks).length;
console.log("Average:", average);

const [subject, score] = Object.entries(marks).reduce((max, curr) => {
  return curr[1] > max[1] ? curr : max;
});

marks.computer = 90;
console.log(marks);


// Hands-on 3
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};
settings.theme = settings.theme === "light" ? "dark" : "light";
console.log(settings.theme);

settings.autoSave = true;

delete settings.notifications;

Object.freeze(settings);
>>>>>>> d5183f2 (second commit)
