import Decimal from "decimal.js";

export function sum(a: number | string, b: number | string): Decimal {
  return new Decimal(a).plus(b);
}

export function product(a: number | string, b: number | string): Decimal {
  return new Decimal(a).mul(b);
}
