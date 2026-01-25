const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

export function validateCoupon(couponCode, cartTotal, cartItems) {
  const coupon = coupons[couponCode];
  if (!coupon) return { valid: false, message: "Invalid coupon" };

  if (cartTotal < coupon.minAmount)
    return { valid: false, message: "Minimum amount not met" };

  if (coupon.category) {
    const eligible = cartItems.some(item =>
      item.product.category === coupon.category
    );
    if (!eligible)
      return { valid: false, message: "Category requirement not met" };
  }

  return { valid: true, message: "Coupon applied" };
}

export function calculateDiscount(couponCode, cartTotal) {
  const coupon = coupons[couponCode];

  if (coupon.type === "percentage") {
    return (cartTotal * coupon.value) / 100;
  } else if (coupon.type === "flat") {
    return coupon.value;
  }
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
  const check = validateCoupon(couponCode, cartTotal, cartItems);

  if (!check.valid)
    return { originalTotal: cartTotal, discount: 0, finalTotal: cartTotal, message: check.message };

  const discount = calculateDiscount(couponCode, cartTotal);
  return {
    originalTotal: cartTotal,
    discount,
    finalTotal: cartTotal - discount,
    message: "Discount applied"
  };
}
