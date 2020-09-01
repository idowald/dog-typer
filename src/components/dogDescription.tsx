import * as React from "react";
import {
  Card,
  CardContent,
  createStyles,
  Theme,
  Typography,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// props from parent element
interface OwnProps {
  dogType?: string;
  errorMessage: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dogDescription: {
      width: "560px"
    },
    dogDescriptionSmall: {
      width: "calc(640px *0.5)"
    }
  })
);
const generateText = ({ dogType, errorMessage }: OwnProps): string => {
  if (errorMessage) {
    return errorMessage;
  }
  if (dogType) {
    return `Your dog type is: ${dogType}`;
  }
  return "You don't have a dog yet I believe";
};
export const DogDescription = ({ dogType, errorMessage }: OwnProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = !useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Card
      className={
        isSmallScreen ? classes.dogDescriptionSmall : classes.dogDescription
      }
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          {generateText({ dogType, errorMessage })}
        </Typography>
      </CardContent>
    </Card>
  );
};
