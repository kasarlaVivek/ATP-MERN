<<<<<<< HEAD
// Hands-on 1
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};

let userCopy = structuredClone(user);
userCopy.preferences.theme = "light";
console.log(user, userCopy);


// Hands-on 2
const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address: {
            city: "Hyderabad",
            pincode: 500085
        }
    },
    items: [
        { product: "Laptop", price: 70000 }
    ]
};

let orderCopy = structuredClone(order);
orderCopy.customer.address.city="karimnagar";
orderCopy.items[0].price=80000;
console.log(order,orderCopy);
=======
// Hands-on 1
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};

let userCopy = structuredClone(user);
userCopy.preferences.theme = "light";
console.log(user, userCopy);


// Hands-on 2
const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address: {
            city: "Hyderabad",
            pincode: 500085
        }
    },
    items: [
        { product: "Laptop", price: 70000 }
    ]
};

let orderCopy = structuredClone(order);
orderCopy.customer.address.city="karimnagar";
orderCopy.items[0].price=80000;
console.log(order,orderCopy);
>>>>>>> d5183f2 (second commit)
