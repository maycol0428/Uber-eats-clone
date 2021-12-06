const FormatNumber = (cartItems) => {
  const total = cartItems
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(total);
};

export default FormatNumber;
