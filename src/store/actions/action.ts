import actionCreatorFactory, { ActionCreator } from "typescript-fsa";
const factory = actionCreatorFactory();

const createAction = <T>(type: string): ActionCreator<T> => {
  const actionCreator = factory<T>(type);
  actionCreator.toString = () => type;
  return actionCreator;
};

export const changeDog = createAction<{ url: string }>("CHANGE_DOG");
export const dogClassified = createAction<{ dogType: string }>("DOG_CLASSIFIED");
export const dogBreedPictures = createAction<{ galleryUrls: string[] }>("DOG_BREED_PICTURES");
// TODO modelLoaded should be more generic
export const modelLoaded = createAction<{}>("MODEL_LOADED");
export const setPristine = createAction<{}>("SET_PRISTINE");
