import { connect } from "react-redux";
import { State } from "../store/reducers/reducer";
import {BreedGallery} from "../components/breedGallery";

export const BreedGalleryContainer = connect(
  ({ dog: { galleryUrls } }: State) => ({ galleryUrls })
)(BreedGallery);
