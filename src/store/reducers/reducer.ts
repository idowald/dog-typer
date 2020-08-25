import { combineReducers } from "redux";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { addFromSaga, changeDog } from "../actions/action";

export interface DogState {
  dogPlaceHolderUrl: string;
  dogType?: string;
  galleryUrls: string[];
}

export interface State {
  dog: DogState;
}

const initialState: State = {
  dog: {
    dogPlaceHolderUrl: `${process.env.PUBLIC_URL}/dogBreedPlaceholder.png`,
    dogType: undefined,
    galleryUrls: []
  }
};

const dogReducer = reducerWithInitialState(initialState.dog)
  .case(changeDog, (state, { url }) => {
    return {
      ...state,
      dogPlaceHolderUrl: url
    };
  })
  .build();

export const reducer = combineReducers<State>({
  dog: dogReducer
});
