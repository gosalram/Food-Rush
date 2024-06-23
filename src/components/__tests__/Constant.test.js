import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us coponenet", () => {
  //test case to verify there is a heading or  not

  render(<Contact />); //To test UI component we must render it to the JSDOM lib

  //Querying
  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});
test("Should load button inside contact us coponenet", () => {
  render(<Contact />); //To test UI component we must render it to the JSDOM lib
  const button = screen.getByRole("button");

  //Assertion
  expect(button).toBeInTheDocument();
});
test("Should load input name inside contact us coponenet", () => {
  render(<Contact />); //To test UI component we must render it to the JSDOM lib
  const inputNAme = screen.getByPlaceholderText("name");

  //Assertion
  expect(inputNAme).toBeInTheDocument();
});
test("Should load input name inside contact us coponenet", () => {
  render(<Contact />); //To test UI component we must render it to the JSDOM lib
  const inputBoxes = screen.getAllByRole("textbox");

  console.log(inputBoxes.length);
  //Assertion
  expect(inputBoxes.length).toBe(2);
});
