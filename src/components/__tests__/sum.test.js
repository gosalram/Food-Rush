import sum from "../sum";

test("Sum function expected to calculate sum of two numbers", () => {
  const result = sum(5, 6);
  //Assertion
  expect(result).toBe(11);
});
