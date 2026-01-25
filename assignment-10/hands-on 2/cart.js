import { getProductById, checkStock } from './product.js';

let cartItems = [];

export function addToCart(productId, quantity) {
  const product = getProductById(productId);

  if (!product) return "Product not found";
  if (!checkStock(productId, quantity)) return "Not enough stock";

  const existing = cartItems.find(item => item.productId === productId);

  if (existing) {
    existing.quantity += quantity;
    return "Quantity updated";
  }

  cartItems.push({ productId, quantity });
  return "Added to cart";
}

export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.productId !== productId);
  return "Removed from cart";
}

export function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) return "Not enough stock";

  const item = cartItems.find(i => i.productId === productId);
  if (item) item.quantity = newQuantity;

  return "Quantity updated";
}

export function getCartItems() {
  return cartItems.map(item => ({
    ...item,
    product: getProductById(item.productId)
  }));
}

export function getCartTotal() {
  return getCartItems().reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
}

export function clearCart() {
  cartItems = [];
}
