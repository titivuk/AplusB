import { validateOperand } from "./operand.validator";

describe("operand validator", () => {
  it("shoud return true on positive number", async () => {
    expect(validateOperand(6.5)).toBe(true);
  });

  it("shoud return true on negative number", async () => {
    expect(validateOperand(-6.5)).toBe(true);
  });

  it("shoud return true on MAX_SAFE_INTEGER", async () => {
    expect(validateOperand(Number.MAX_SAFE_INTEGER)).toBe(true);
  });

  it("shoud return true on MAX_VALUE", async () => {
    expect(validateOperand(Number.MAX_VALUE)).toBe(true);
  });

  it("shoud return false on POSITIVE_INFINITY", async () => {
    expect(validateOperand(Number.POSITIVE_INFINITY)).toBe(false);
  });

  it("shoud return false on NEGATIVE_INFINITY", async () => {
    expect(validateOperand(Number.NEGATIVE_INFINITY)).toBe(false);
  });
});
