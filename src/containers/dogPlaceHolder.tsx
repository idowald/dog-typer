import { connect } from "react-redux";
import { State } from "../store/reducers/reducer";
import { DogPlaceHolder } from "../components/dogPlaceHolder";

export const DogPlaceHolderContainer = connect(
  ({ dog: { dogPlaceHolderUrl, loadingBreed } }: State) => ({
    dogPlaceHolderUrl,
    loadingBreed
  })
)(DogPlaceHolder);
