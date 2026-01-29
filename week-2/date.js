
//Assignment 1: Date Creation & Extraction (Beginner)let date=new Date();
console.log("current date and time is :",date.toString());
let year=date.getFullYear();
let month=date.getMonth()+1;
let dt=date.getDate();
let day=date.getDay();
let hours=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();
console.log("{DD-MM-YYYY HH:mm:ss} format is :",dt+"-"+month+"-"+year+" "+hours+":"+minutes+":"+seconds);
//anotther way to print in this format is 
console.log(`{DD-MM-YYYY HH:mm:ss} format is : ${dt}-${month}-${year} ${hours}:${minutes}:${seconds}`);

//Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
let enrollmentDeadline = new Date("2026-01-20");
let inputDate="2026-02-30";
let dateParts=inputDate.split("-");
let year=parseInt(dateParts[0]);
let month=parseInt(dateParts[1])-1; 
let day=parseInt(dateParts[2]);
if(new Date(2027,0,1)<enrollmentDeadline){
    console.log("Enrollment Open");
}   
else{
    console.log("Enrollment Closed");
}   

//validate the user input date
let userDate=new Date(2026,2,30);
if(userDate.getMonth()<=12 && userDate.getMonth()>0 && userDate.getFullYear()<=2026 && userDate.getDate()>0 && userDate.getDate()<=new Date(userDate.getFullYear(),userDate.getMonth()+1,0).getDate()){
    console.log("Valid Date");
}
else{
    console.log("Invalid Date");
}   

//Assignment 3: Age Calculator (Intermediate)
let dob="2000-05-15";
let dobSplit=dob.split("-");
let dobYear=parseInt(dobSplit[0]);
let dobMonth=parseInt(dobSplit[1]);
let dobDate=parseInt(dobSplit[2]);
let Obj=new Date(dobYear,dobMonth-1,dobDate);
let currentDate=new Date();
let ageYears=currentDate.getFullYear()-Obj.getFullYear();
let ageMonths=currentDate.getMonth()-Obj.getMonth();
let ageDays=currentDate.getDate()-Obj.getDate();
if(ageMonths<0 || (ageMonths===0 && ageDays<0)){
    ageYears--;
}   
console.log("Exact Age is :",ageYears,"years");