import { connect } from "react-redux";
import { State } from "../store/reducers/reducer";
import { Counter, Props } from "../components/counter";

export const CounterContainer = connect(
  ({ counter }: State): Props => ({ count: counter.count })
)(Counter);
