import { product, sum } from "./math";

describe("math", () => {
  describe("sum", () => {
    it("should sum positive numbers", async () => {
      const a = 2;
      const b = 3;

      expect(sum(a, b).toString()).toBe("5");
    });

    it("should sum negative numbers", async () => {
      const a = -2;
      const b = -3;

      expect(sum(a, b).toString()).toBe("-5");
    });

    it("should sum opposite sign numbers", async () => {
      const a = 2;
      const b = -3;

      expect(sum(a, b).toString()).toBe("-1");
    });
  });

  describe("product", () => {
    it("should multiply positive numbers", async () => {
      const a = 2;
      const b = 3;

      expect(product(a, b).toString()).toBe("6");
    });

    it("should multiply negative numbers", async () => {
      const a = -2;
      const b = -3;

      expect(product(a, b).toString()).toBe("6");
    });

    it("should sum opposite sign numbers", async () => {
      const a = 2;
      const b = -4;

      expect(product(a, b).toString()).toBe("-8");
    });
  });
});
