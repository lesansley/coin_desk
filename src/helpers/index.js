export function formatNumber(val, currency) {
  const options = currency
    ? {
        style: "currency",
        currency,
      }
    : {};

  const formatter = new Intl.NumberFormat(undefined, options);

  if (!isNaN(val)) {
    if (parseInt(val) > 0) return formatter.format(val);
    return null;
  } else {
    return null;
  }
}
