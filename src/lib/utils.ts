export function priceFormat(price: number) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
}

export function deductFormat(original: number, sales: number) {
  const percent = Math.ceil((1 - sales / original) * 100);
  const value = original - sales;
  const deduct = priceFormat(value);
  const result = value === 0 ? null : `${percent}%, ${deduct} 할인`;
  return result;
}

export function percentFormat(original: number, sales: number) {
  return Math.ceil((1 - sales / original) * 100);
}

export function dateFormat(date: string) {
  const before = date.split("-");
  const after = `${before[0]}년 ${before[1]}월 ${before[2]}일`;
  return after;
}
