enum DiscountType {
  Standard,
  Seasonal,
  Weight,
}

function getDiscountedPrice(
  cartWeight: number,
  totalPrice: number,
  discountType: DiscountType
): number {
  // Write your code here
  let reducedPrice: number = 0;
  switch (discountType) {
    case DiscountType.Standard:
      reducedPrice = totalPrice * 0.94;
      break;
    case DiscountType.Seasonal:
      reducedPrice = totalPrice * 0.88;
      break;
    case DiscountType.Weight:
      if (cartWeight <= 10) {
        reducedPrice = totalPrice * 0.94;
      } else {
        reducedPrice = totalPrice * 0.82;
      }
  }
  return reducedPrice;
}

console.log(getDiscountedPrice(12, 100, DiscountType.Weight));
