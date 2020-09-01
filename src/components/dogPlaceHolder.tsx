import * as React from "react";
import {
  CircularProgress,
  createStyles,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
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
    },
    sm: {
      width: "calc(640px *0.5)",
      height: "calc(360px *0.5)"
    }
  })
);
// @media screen and (max-width: 480px) {
//     img {
//         width: calc(640px *0.5);
//         height: calc(360px *0.5)
//     }
export const DogPlaceHolder = ({
  dogPlaceHolderUrl,
  loadingBreed
}: OwnProps) => {
  const theme = useTheme();
  const isSmallScreen = !useMediaQuery(theme.breakpoints.up("sm"));
  const classes = useStyles();
  return (
    <div>
      <CircularProgress
        className={loadingBreed ? classes.float : classes.hidden}
      />
      <img
        className={isSmallScreen ? classes.sm : ""}
        alt="dog place holder"
        id="placeHolderImageId"
        src={dogPlaceHolderUrl}
        height="360px"
        width="640px"
      />
    </div>
  );
};
