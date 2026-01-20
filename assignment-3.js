// Hands-on-1

let isLoggedIn = true;
let isProfileComplete = false;
let msg = isLoggedIn ? (isProfileComplete ? "Welcome back!" : "Please complete your profile.") : "Please log in.";
console.log(msg);

// Hands-on -2
let price = 1299;
let label =price < 500 ? "budget course" : price >500 && price <1000 ? "Standard Course" : "Premium Course";
console.log("Course Label:", label);

// HandsOn-3

let hasPaid = true;
let hasCompletedBasics = false;
let enrollMessage = hasPaid && hasCompletedBasics ? "Enroll now" : "Complete Requirements";
console.log(enrollMessage);