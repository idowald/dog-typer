import * as React from "react";
import {
  Card,
  CardContent,
  createStyles,
  Theme,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// props from parent element
interface OwnProps {
  dogType?: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dogDescription: {
      minWidth: "300px"
    }
  })
);
export const DogDescription = ({ dogType }: OwnProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.dogDescription} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {dogType
            ? `Your dog type is: ${dogType}`
            : "You don't have a dog yet I believe"}{" "}
        </Typography>
      </CardContent>
    </Card>
  );
};
