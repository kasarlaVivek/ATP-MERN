<<<<<<< HEAD
// Hands-on 1
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let date1= new Date();
console.log(date1.getFullYear());
let monthIdx = date1.getMonth()
console.log(monthNames[monthIdx]);
console.log(date1.getDate());
const days = ["Mon","tues",'wednes','thurs','fri','sat','sun'];
let dayIdx = date1.getDay()
console.log(days[dayIdx]);
console.log(`${date1.getHours()}-${date1.getMinutes()}-${date1.getSeconds()}`);
console.log(`${date1.getDate()}-${date1.getMonth()}-${date1.getFullYear()} ${date1.getHours()}-${date1.getMinutes()}-${date1.getSeconds()}`);



// Hands on 2
let enrollmentDeadline = new Date("2026-01-20");
let today = new Date("2026-01-21");
let msg = today < enrollmentDeadline ? "Enrollment Open" :  "Enrollment Closed";
console.log(msg);

const date = new Date('2026-02-30');
console.log(isNandate.getTime());

if (isNaN(date.getTime())) {
  console.log(`Input "${invalidDateInput}" is Invalid`); 
} else {
  console.log(`Input "${invalidDateInput}" is Valid`);
}




// Hands-on 3
let dob = "2000-05-15";

// Convert to Date object
let birthDate = new Date(dob);
let today1 = new Date();

// Calculate difference in years
let age = today1.getFullYear() - birthDate.getFullYear();

// Adjust if birthday hasn't occurred yet this year
let hasBirthdayPassed =
  today1.getMonth() > birthDate.getMonth() ||
  (today1.getMonth() === birthDate.getMonth() && today1.getDate() >= birthDate.getDate());

if (!hasBirthdayPassed) {
  age--;
}

console.log("Age:", age);
=======
// Hands-on 1
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let date1= new Date();
console.log(date1.getFullYear());
let monthIdx = date1.getMonth()
console.log(monthNames[monthIdx]);
console.log(date1.getDate());
const days = ["Mon","tues",'wednes','thurs','fri','sat','sun'];
let dayIdx = date1.getDay()
console.log(days[dayIdx]);
console.log(`${date1.getHours()}-${date1.getMinutes()}-${date1.getSeconds()}`);
console.log(`${date1.getDate()}-${date1.getMonth()}-${date1.getFullYear()} ${date1.getHours()}-${date1.getMinutes()}-${date1.getSeconds()}`);



// Hands on 2
let enrollmentDeadline = new Date("2026-01-20");
let today = new Date("2026-01-21");
let msg = today < enrollmentDeadline ? "Enrollment Open" :  "Enrollment Closed";
console.log(msg);

const date = new Date('2026-02-30');
console.log(isNandate.getTime());

if (isNaN(date.getTime())) {
  console.log(`Input "${invalidDateInput}" is Invalid`); 
} else {
  console.log(`Input "${invalidDateInput}" is Valid`);
}




// Hands-on 3
let dob = "2000-05-15";

// Convert to Date object
let birthDate = new Date(dob);
let today1 = new Date();

// Calculate difference in years
let age = today1.getFullYear() - birthDate.getFullYear();

// Adjust if birthday hasn't occurred yet this year
let hasBirthdayPassed =
  today1.getMonth() > birthDate.getMonth() ||
  (today1.getMonth() === birthDate.getMonth() && today1.getDate() >= birthDate.getDate());

if (!hasBirthdayPassed) {
  age--;
}

console.log("Age:", age);
>>>>>>> d5183f2 (second commit)
