import React from "react";
import renderer from "react-test-renderer";

import {DogUploader} from "../dogUploader/dogUploader";

test("renders dog uploader", () => {
  const rendered = renderer.create(<DogUploader changeDog={()=>{}} loadingModel={false} />);
  expect(rendered.toJSON()).toMatchSnapshot();
});
