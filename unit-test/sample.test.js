import { easeOutQuint } from "../src/modules/Easing";
describe("test: Easing", () => {
  it("easeOutQuint", () => {
    const result = easeOutQuint(1, 1, 1, 1);
    expect(result).toEqual(2);
  });
});
