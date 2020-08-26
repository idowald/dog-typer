import * as React from "react";
import { CircularProgress, createStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// props from parent element
interface OwnProps {
  dogPlaceHolderUrl: string;
  loadingBreed: boolean;
}
const useStyles = makeStyles(() =>
  createStyles({
    hidden: {
      display: "none"
    },
    float: {
      float: "left",
      marginTop: "140px",
      marginLeft: "300px",
      position: "fixed"
    }
  })
);
export const DogPlaceHolder = ({
  dogPlaceHolderUrl,
  loadingBreed
}: OwnProps) => {
  const classes = useStyles();
  return (
    <div>
      <CircularProgress
        className={loadingBreed ? classes.float : classes.hidden}
      />
      <img
        alt="dog place holder"
        id="placeHolderImageId"
        src={dogPlaceHolderUrl}
        height="360px"
        width="640px"
      />
    </div>
  );
};
