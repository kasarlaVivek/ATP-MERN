// User profile manager

const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
console.log(user.name,user.email)
user.lastLogin="2026-01-01"
user.role="admin"
delete user.isActive
console.log(Object.keys(user))
console.log(user)

//Exam Result Summary

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
marks.computer = 90;
const marksValues = Object.values(marks); 
const totalMarks = marksValues.reduce((sum, score) => sum + score, 0);
console.log("Total Marks:", totalMarks);
const averageMarks = totalMarks / marksValues.length;
console.log("Average Marks:", averageMarks);
const highestSubject = Object.keys(marks).reduce((high, current) => 
  marks[current] > marks[high] ? current : high
);
console.log(`Highest Scoring Subject: ${highestSubject} (${marks[highestSubject]})`);

//Application Settings Controller

const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};
settings.autoSave=true
delete settings.notifications
console.log(settings.theme = settings.theme === "light" ? "dark" : "light")
Object.freeze(settings)