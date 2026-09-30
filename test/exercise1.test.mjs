import { expect } from "chai";
import { validateArrayElements } from "../src/exercise1.mjs";

describe("Exercise 1 - validateArrayElements", function () {
  it("validates the numbers from the assignment example", function () {
    const numbers = [2, 3, 4, 5];

    const result = validateArrayElements(numbers, number => number % 2 === 0);

    expect(result).to.deep.equal([
      { value: 2, isValid: true },
      { value: 3, isValid: false },
      { value: 4, isValid: true },
      { value: 5, isValid: false }
    ]);
  });

  it("validates the products from the assignment example", function () {
    const products = [
      { name: "Laptop", category: "Electronics" },
      { name: "Shirt", category: "" },
      { name: "Chair", category: "Furniture" }
    ];

    const result = validateArrayElements(
      products,
      product => product.category.length > 0
    );

    expect(result).to.deep.equal([
      { value: products[0], isValid: true },
      { value: products[1], isValid: false },
      { value: products[2], isValid: true }
    ]);
  });
  it("validates an empty array", function () {
  const result = validateArrayElements([], element => true);

  expect(result).to.deep.equal([]);
});

it("validates all elements as valid", function () {
  const numbers = [1, 2, 3];

  const result = validateArrayElements(numbers, number => true);

  expect(result).to.deep.equal([
    { value: 1, isValid: true },
    { value: 2, isValid: true },
    { value: 3, isValid: true }
  ]);
});

it("validates all elements as invalid", function () {
  const numbers = [1, 2, 3];

  const result = validateArrayElements(numbers, number => false);

  expect(result).to.deep.equal([
    { value: 1, isValid: false },
    { value: 2, isValid: false },
    { value: 3, isValid: false }
  ]);
});

it("validates values of different types", function () {
  const values = [1, "hello", true];

  const result = validateArrayElements(
    values,
    value => typeof value === "number"
  );

  expect(result).to.deep.equal([
    { value: 1, isValid: true },
    { value: "hello", isValid: false },
    { value: true, isValid: false }
  ]);
});

it("calls the validator once per element", function () {
  const numbers = [1, 2, 3];
  let calls = 0;

  validateArrayElements(numbers, number => {
    calls++;
    return true;
  });

  expect(calls).to.equal(3);
});
});
