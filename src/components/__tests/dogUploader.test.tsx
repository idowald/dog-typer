import React from "react";
import renderer from "react-test-renderer";

import {DogUploader} from "../dogUploader";

test("renders learn react link", () => {
  const rendered = renderer.create(<DogUploader changeDog={()=>{}} loadingModel={false} />);
  expect(rendered.toJSON()).toMatchSnapshot();
});
