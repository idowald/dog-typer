import * as React from "react";
import { State } from "../store/reducers/reducer";
import AddButton from "./addButton";

export type Props = State["counter"];
export const Counter = ({ count }: Props) => (
  <div>
    <div>Count: {count}</div>
    <AddButton />
  </div>
);
