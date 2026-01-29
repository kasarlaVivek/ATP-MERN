//You are building a shopping cart summary for an e-commerce website.
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
console.log(cart.filter(c=>c.inStock))
const productSummaries = cart.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
console.log(productSummaries);
const grandTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
console.log(grandTotal);
const mouseDetails = cart.find(item => item.name === "Mouse");
console.log(mouseDetails);
const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
console.log(keyboardIndex);

//Student Performance Dashboard

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
console.log(students.filter(s=>s.marks>=40))
const gradedStudents = students.map(s => ({
  ...s,
  grade: s.marks >= 90 ? "A" : 
         s.marks >= 75 ? "B" : 
         s.marks >= 60 ? "C" : "D"
}));
console.log(gradedStudents);
const totalMarks = students.reduce((sum, s) => sum + s.marks, 0);
const average = totalMarks / students.length;
console.log(average);
const topStudent = students.find(s => s.marks === 92);
console.log(topStudent);
const kiranIndex = students.findIndex(s => s.name === "Kiran");
console.log(kiranIndex);

//employee payroll processor
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
const itEmployees = employees.filter(e => e.department === "IT");
const payroll = employees.map(e => ({
  ...e,
  netSalary: e.salary * 1.10
}));
const totalPayout = employees.reduce((total, e) => total + e.salary, 0);
const lowEarner = employees.find(e => e.salary === 30000);
const nehaIndex = employees.findIndex(e => e.name === "Neha");

//Movie Streaming Platform
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
const sciFiMovies = movies.filter(m => m.genre === "Sci-Fi");
const movieLabels = movies.map(m => `${m.title} (${m.rating})`);
const avgRating = movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;
const jokerMovie = movies.find(m => m.title === "Joker");
const avengersIndex = movies.findIndex(m => m.title === "Avengers");


//bank transaction Analyzer
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
const credits = transactions.filter(t => t.type === "credit");
const amounts = transactions.map(t => t.amount);
const balance = transactions.reduce((acc, t) => {
  return t.type === "credit" ? acc + t.amount : acc - t.amount;
}, 0);
const firstDebit = transactions.find(t => t.type === "debit");
const index10k = transactions.findIndex(t => t.amount === 10000);