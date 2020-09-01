import React from "react";
import renderer from "react-test-renderer";
import {DogDescription, generateDescriptionText} from "../dogDescription";

test("test dog description render", () => {
  const rendered = renderer.create(
    <DogDescription dogType={"testy"} errorMessage={""} />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});

test("render the correct text for description", () => {
  let dogType = "Some dog";
  let errorMessage = "";
  expect(generateDescriptionText({dogType, errorMessage})).toContain("Some dog");
  errorMessage = "some error message";
  const errorWithoutDog =generateDescriptionText({dogType, errorMessage});
  expect(errorWithoutDog).not.toContain("Some dog");
});
