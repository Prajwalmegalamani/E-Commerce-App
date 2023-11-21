import { TitleCase } from "../titleCase";

test("Should convert string to title case", () => {
  let str = "hello-world";
  expect(TitleCase(str)).toEqual("Hello World");
});
