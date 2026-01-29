//Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
const user={
    id:101,
    name:"Sidhvi",
    prefernces:{
        theme:"dark",
        language:"english"
    }
    };

const user1={ //because of this shallow copy when we modify user1 it will also affect user
    //const is not allowing us to reassign user1 but we can modify the properties of user1
    id:111,
    name:"anusha",
    prefernces:{
        theme:"dark",
        language:"hindi"
    }
    };
let usercopy={...user}//shallow copy
//modifying user should not affect user1
user.name="Harini";
user.prefernces.theme="light";
console.log("user:",user);
console.log("user1:",user1);

//Hands-On 2: Deep Copy (Isolation & Safety Use Case)
const order = {
    orderId: "ORD1001",
    customer: {
        name:"Anitha",
        address:{
            city: "Hyderabad",
            pincode: 500085
        }
    },
    items: [
        { product: "Laptop", price: 70000 }
    ]
};

let orderCopy=structuredClone(order);
orderCopy.customer.address.city="Chennai";
orderCopy.items[0].price=65000;
console.log("order:",order);
console.log("orderCopy:",orderCopy);