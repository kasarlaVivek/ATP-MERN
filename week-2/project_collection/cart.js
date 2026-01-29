import { cart, courses } from './data.mjs';
export const fullCart = cart.map(item => {
    const courseInfo = courses.find(c => c.id === item.courseId);
    return { ...courseInfo, qty: item.qty };
});
export const cartTotal = fullCart.reduce((acc, item) => acc + (item.price * item.qty), 0);
export const increasedCart = cart.map(item => 
    item.courseId === 101 ? { ...item, qty: item.qty + 1 } : item
);
export const filteredCart = cart.filter(item => item.courseId !== 103);
export const isAllPaid = fullCart.every(item => item.price > 0);
console.log(cartTotal);
console.log(isAllPaid);