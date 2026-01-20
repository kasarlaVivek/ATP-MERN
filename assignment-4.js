// handsOn 1
const temps = [32, 35, 28, 40, 38, 30, 42];

let filteredTemps = temps.filter((temp) => temp > 35);
console.log(filteredTemps);
let tempsInF = temps.map((temp) => Math.round((temp * 1.8) + 32));
console.log(tempsInF);
let avgTemp = temps.reduce((acc,temp) => acc + temp,0) / temps.length;
console.log(Math.round(avgTemp));
let tempAbove40 = temps.find(temp => temp>40);
console.log(tempAbove40);
let indexOf28 = temps.findIndex(temp => temp === 28);
console.log(indexOf28);

// Hands-on 2
const courses = ["javascript", "react", "node", "mongodb", "express"];

let longCourses = courses.filter(course => course.length > 5);
console.log(longCourses);

let upperCourses = courses.map(course => course.toUpperCase());
console.log(upperCourses);

let totalChars = upperCourses.reduce((acc,ele) => acc+'|'+ele);
console.log(totalChars);

let courseReact = courses.find(ele => ele === 'react');
console.log(courseReact);

let courseNode = courses.findIndex(ele => ele ==='node');
console.log(courseNode);

// Hands - on 3
const mrks = [78, 92, 35, 88, 40, 67];

let passMarks = mrks.filter(m => m>=40);
console.log(passMarks);

let graceMarks = mrks.map(m => m+5);
console.log(graceMarks);

let highestMark = mrks.reduce((max,m) => m>max ? m :max);
console.log(highestMark);

let firstFail = mrks.find(m => m < 40);
console.log(firstFail);

let markIndex = mrks.findIndex(m => m===92);
console.log(markIndex);