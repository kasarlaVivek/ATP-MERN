<<<<<<< HEAD
const totalBill = (total,change) => {
    return total + change;
}
let totalAmount =0;
totalAmount = totalBill(0,500);
totalAmount = totalBill(totalAmount,1200);
totalAmount = totalBill(totalAmount,-200);
totalAmount = totalBill(totalAmount,totalAmount*0.18);
=======
const totalBill = (total,change) => {
    return total + change;
}
let totalAmount =0;
totalAmount = totalBill(0,500);
totalAmount = totalBill(totalAmount,1200);
totalAmount = totalBill(totalAmount,-200);
totalAmount = totalBill(totalAmount,totalAmount*0.18);
>>>>>>> d5183f2 (second commit)
console.log("Total Bill Amount:", totalAmount);