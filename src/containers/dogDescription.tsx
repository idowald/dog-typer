import { connect } from "react-redux";
import { State } from "../store/reducers/reducer";
import { DogDescription } from "../components/dogDescription";

export const DogDescriptionContainer = connect(
  ({ dog: { dogType } }: State) => ({ dogType })
)(DogDescription);
