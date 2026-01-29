// Daily Temprature Analyzer
const temperatures=[32,35,28,40,38,30,42];
console.log(temperatures.filter(temp=>temp>35))
console.log(temperatures.map(temp=>(temp*1.8)+32))
const sum = temperatures.reduce((total, temp) => total + temp, 0);
const avg = sum / temperatures.length;
console.log(avg);
console.log(temperatures.find(temp => temp > 40))
console.log(temperatures.findIndex(temp => temp === 28))

// Online Course Name Processor
const course=["javascript", "react", "node", "mongodb", "express"]
console.log(course.filter(c=>c.length>5))
console.log(course.map(c=>c.toUpperCase()))
console.log(course.reduce((acc,c)=>acc+"| "+c))
console.log(course.find(c=>c=="react"))
console.log(course.findIndex(c=>c==="node"))

//Student Marks List
const marks = [78, 92, 35, 88, 40, 67];
console.log(marks.filter(m=>m>=40))
console.log(marks.map(m=>m+5))
console.log(marks.reduce((h,m)=>h>m ? h:m))
console.log(marks.find(m=>m<40))
console.log(marks.findIndex(m=>m===92))