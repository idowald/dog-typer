import React from "react";
import renderer from "react-test-renderer";
import { DogDescription } from "../dogDescription";

test("renders learn react link", () => {
  const rendered = renderer.create(<DogDescription dogType={"testy"} />);
  expect(rendered.toJSON()).toMatchSnapshot();
});
