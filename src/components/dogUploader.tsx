import * as React from "react";
import { Button } from "@material-ui/core";
import "./dogUploader.css";

export interface DispatchProps {
  // TODO, problem of versions between ActionCreator and Action, needs fixing https://github.com/reduxjs/redux/issues/2709
  changeDog: any;
}

export interface OwnProps {}

export const DogUploader = ({ changeDog }: DispatchProps & OwnProps) => {
  return (
    <label htmlFor="upload-photo" className="dogUploader">
      <Button
        color="primary"
        variant="contained"
        component="span"
        onChange={changeDog}
      >
        Upload your dog
        <input
          id="upload-photo"
          name="upload-photo"
          type="file"
          accept="image/*"
        />
      </Button>
    </label>
  );
};
interface OwnStateProps {
  dogPlaceHolderUrl: string;
}

