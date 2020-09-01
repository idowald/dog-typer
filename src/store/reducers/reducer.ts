import { combineReducers } from "redux";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import {
  changeDog,
  dogBreedPictures,
  dogClassified,
  errorMessage,
  modelLoaded
} from "../actions/action";

export interface DogState {
  dogPlaceHolderUrl: string;
  dogType?: string;
  galleryUrls: string[];
  errorMessage: string;
  // a small short cut I took to finish the task- can be improved with actions typing google createRequestTypes for examples
  loadingBreed: boolean;
  modelLoaded: boolean;
}

export interface State {
  dog: DogState;
}

export const initialState: State = {
  dog: {
    errorMessage: "",
    dogPlaceHolderUrl: `${process.env.PUBLIC_URL}/dogBreedPlaceholder.png`,
    dogType: "",
    galleryUrls: [],
    loadingBreed: false,
    modelLoaded: false
  }
};
export const changeDogReducer = (state: DogState, { url }: { url: string }) => {
  return {
    ...state,
    dogPlaceHolderUrl: url,
    // not the best way- it should be from saga to be more precise with data manipulation and side effects
    // I had to take a short cut
    loadingBreed: true
  };
};
const dogReducer = reducerWithInitialState(initialState.dog)
  .case(changeDog, changeDogReducer)
  .case(dogClassified, (state, { dogType }) => ({
    ...state,
    loadingBreed: false,
    dogType
  }))
  .case(modelLoaded, state => ({ ...state, modelLoaded: true }))
  .case(dogBreedPictures, (state, { galleryUrls }) => ({
    ...state,
    galleryUrls
  }))
  .case(errorMessage, (state, { message }) => ({
    ...state,
    errorMessage: message,
    loadingBreed: false
  }))
  .build();

export const reducer = combineReducers<State>({
  dog: dogReducer
});
