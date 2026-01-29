//Smart Login Status Engine
let isLoggedIn=true;
let isProfileComplete=false;
if(isLoggedIn==true && isProfileComplete==true){
    console.log("welcome back!")
}
if(isLoggedIn==true && isProfileComplete==false){
    console.log("Complete Your Profile")
}
if(isLoggedIn==false){
    console.log("Please Login")
}

//Course Price Tag Labeler
let price=1299;
if(price<500){
    console.log("Budget Course")
}
if(price>=500 && price<=1000){
    console.log("Standard course");
}
if(price>1000){
    console.log("Premium Course")
}

//Enrollment Eligibility Checker
let hasPaid=true;
let hasCompletedBasics=false;
let enrollMessage=(hasPaid && hasCompletedBasics) ? "Enroll Now":"Complete Requirements";
console.log(enrollMessage)