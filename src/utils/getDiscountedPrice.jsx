export function getDiscountedPrice(price = 0, discount = 0) {
    const discountAmount = (price * discount) / 100;
    const final = price - discountAmount;

    return {
        original: price,
        discountAmount: Number(discountAmount.toFixed(2)),
        newPrice: Number(final.toFixed(2)),
    };
}
