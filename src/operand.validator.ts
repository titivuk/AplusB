export function validateOperands(x: unknown, y: unknown): void {
  const xValid = validateOperand(x);
  const yValid = validateOperand(y);

  if (!xValid || !yValid) {
    throw new Error("Invalid operands");
  }
}

export function validateOperand(operand: any): operand is number {
  return Number.isFinite(Number(operand));
}
