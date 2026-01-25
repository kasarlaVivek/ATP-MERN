import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function validatePaymentMethod(method) {
  return ["card", "upi", "cod"].includes(method);
}

export function processPayment(paymentMethod, couponCode = null) {
  if (!validatePaymentMethod(paymentMethod))
    return { status: "failed", message: "Invalid payment method" };

  const items = getCartItems();
  const subtotal = getCartTotal();

  let discountInfo = { originalTotal: subtotal, discount: 0, finalTotal: subtotal };

  if (couponCode) {
    discountInfo = applyDiscount(subtotal, couponCode, items);
  }

  items.forEach(item => reduceStock(item.productId, item.quantity));

  clearCart();

  return {
    orderId: "ORD" + Date.now(),
    items,
    subtotal,
    discount: discountInfo.discount,
    total: discountInfo.finalTotal,
    paymentMethod,
    status: "success",
    message: "Payment processed successfully"
  };
}
