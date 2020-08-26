import * as React from "react";
import {
  Button,
  CircularProgress,
  createStyles,
  Theme
} from "@material-ui/core";
import "./dogUploader.css";
import { makeStyles } from "@material-ui/core/styles";

export interface DispatchProps {
  // TODO, problem of versions between ActionCreator and Action, needs fixing https://github.com/reduxjs/redux/issues/2709
  changeDog: any;
}

export interface OwnProps {
  loadingModel: boolean;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hidden: {
      visibility: "hidden"
    }
  })
);
export const DogUploader = ({
  changeDog,
  loadingModel
}: DispatchProps & OwnProps) => {
  const classes = useStyles();
  return (
    <label htmlFor="upload-photo" className="dogUploader">
      <Button
        color="primary"
        variant="contained"
        component="span"
        onChange={changeDog}
        disabled={loadingModel}
      >
        Upload your dog
        <CircularProgress
          color="inherit"
          className={loadingModel ? "" : classes.hidden}
        />
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
