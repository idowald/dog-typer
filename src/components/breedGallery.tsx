import * as React from "react";
import { Button } from "@material-ui/core";

// props of action-creator
interface DispatchProps {
  // TODO, problem of versions between ActionCreator and Action, needs fixing https://github.com/reduxjs/redux/issues/2709
  add: any;
}

// props from parent element
interface OwnProps {
}

export const AddButton = ({ add }: DispatchProps & OwnProps) => {
  return <Button onClick={add}>Add</Button>;
};

