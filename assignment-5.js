// Hands-on 1
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

let inStockItems = cart.filter(item => item.inStock);
console.log(inStockItems);
let updatedCart = cart.map(item => {
    return {name: item.name, totalPrice: item.price}
})
console.log(updatedCart);

let totalCartValue =cart.reduce((acc,item) => acc +(item.price * item.quantity),0);
console.log(totalCartValue);

let mouseDetails = cart.find((item) => item.name === 'Mouse');
console.log(mouseDetails);

let keyboardIndex =cart.findIndex(item => item.name === 'Keyboard');
console.log(keyboardIndex);

// Hands-on 2
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

let passedStudents = students.filter(std => std.marks >= 40);
console.log(passedStudents);
let gradedStudents = students.map(ele => {
    let grade = ele.marks >= 90 ? 'A' : 
                ele.marks >= 75 ? 'B' :
                ele.marks >= 60 ? 'C' :
                "D";
        return {name: ele.name, marks: ele.marks, grade};
})
students.grade = gradedStudents;
console.log(gradedStudents);

let avgMarks = students.reduce((acc,ele) => acc + ele.marks,0)/ students.length;
console.log(avgMarks);

let topStudent = students.find(ele => ele.marks === 92);
console.log(topStudent);

let kiranIndex = students.findIndex(ele => ele.name === 'Kiran');
console.log(kiranIndex);

// Hands on -3

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

let itEmployess = employees.filter(ele => ele.department==="IT")
console.log(itEmployess);

let netSalary = employees.map(ele => ele.salary = ele.salary + ele.salary*0.1);
console.log(netSalary);

let totalSalary = employees.reduce((acc,ele) => acc = acc + ele.salary);
console.log(totalSalary);

let employeeWith30000 = employees.find(ele = ele.salary === 30000);
console.log(employeeWith30000);

let nehaIdx = employees.findIndex(ele => ele.name==="Neha");
console.log(nehaIdx);


// Hands-on 4

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

const sciFiMovies = movies.filter(ele=> ele.genre === "Sci-Fi");
console.log(sciFiMovies);

const formattedMovie = movies.filter(ele => ele.title === "Inception").map(ele => `${ele.title} (${ele.rating})`);

console.log(formattedMovie);

const averageRating = movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
console.log(averageRating);

const jokerMovie = movies.find(movie => movie.title === "Joker");
console.log(jokerMovie);

const avengersIndex = movies.findIndex(movie => movie.title === "Avengers");
console.log(avengersIndex);


// Hands-on 5
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

const creditTransactions = transactions.filter(t => t.type === "credit");
console.log(creditTransactions);

const amounts = transactions.map(t => t.amount);
console.log(amounts);

const finalBalance = transactions.reduce((balance, t) => {
  return t.type === "credit" ? balance + t.amount : balance - t.amount;
}, 0);

console.log(finalBalance);

const firstDebit = transactions.find(t => t.type === "debit");
console.log(firstDebit);

const index = transactions.findIndex(t => t.amount === 10000);
console.log(index);