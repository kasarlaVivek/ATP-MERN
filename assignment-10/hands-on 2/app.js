import { getAllProducts, searchProducts, getProductsByCategory } from './product.js';
import { addToCart, getCartItems, getCartTotal, updateQuantity, removeFromCart } from './cart.js';
import { processPayment } from './payment.js';

console.log("=== E-Commerce Store ===\n");

console.log("All Products:");
console.log(getAllProducts());

console.log("\nSearching for 'phone':");
console.log(searchProducts("phone"));

console.log("\n=== Adding to Cart ===");
console.log(addToCart(1, 2));
console.log(addToCart(3, 3));
console.log(addToCart(1, 1));

console.log("\n=== Current Cart ===");
console.log(getCartItems());
console.log("Cart Total:", getCartTotal());

console.log("\n=== Updating Quantities ===");
console.log(updateQuantity(1, 2));

console.log("\n=== Removing Item ===");
console.log(removeFromCart(3));

console.log("\n=== Updated Cart ===");
console.log(getCartItems());
console.log("Cart Total:", getCartTotal());

console.log("\n=== Checkout ===");
const order = processPayment("upi", "WELCOME10");
console.log(order);
