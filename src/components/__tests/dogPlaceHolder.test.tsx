import React from "react";
import renderer from "react-test-renderer";

import { DogPlaceHolder } from "../dogPlaceHolder";

test("renders dog place holder", () => {
  const rendered = renderer.create(
    <DogPlaceHolder
      dogPlaceHolderUrl={`${process.env.PUBLIC_URL}/dogBreedPlaceholder.png`}
      loadingBreed={false}
    />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});
