import {
  put,
  debounce,
  select,
  all,
  call,
  fork,
  takeEvery,
  take
} from "redux-saga/effects";
import {
  changeDog,
  dogBreedPictures,
  dogClassified,
  errorMessage,
  modelLoaded,
  setPristine
} from "../actions/action";
import { getModelLoaded, getUrl } from "../selectors/dogSelector";
import { dogService } from "../services/dogService";
import { removeUrlResource } from "./imageSagas";

function* setPristineSage() {
  // put anything you want to init here
  yield fork(getDogBreeds);
  yield fork(getModel);
}
function* getDogBreeds() {
  yield call(dogService.getAllBreeds);
}
function* getModel() {
  yield call(dogService.loadModel);
  yield put(modelLoaded({}));
}
function* changeDogImage() {
  // in real apps we can handle logic error flows in more generic way like listen to all events
  // of some type and clean the error message.
  yield put(errorMessage({ message: "" }));
  const url = yield select(getUrl);
  const modelLoadedState = yield select(getModelLoaded);
  if (!modelLoadedState) {
    yield take(modelLoaded.type); // wait till complete loading
  }
  const prediction = yield call(dogService.classifyDog, { url });
  if (prediction.detectedBreed) {
    yield put(dogClassified({ dogType: prediction.detectedBreed }));
    const galleryUrls = yield call(
      dogService.getBreedPictures,
      prediction.detectedBreed
    );
    // TODO error handling galleryURLS
    yield put(dogBreedPictures({ galleryUrls }));
  } else {
    if (prediction.message) {
      yield put(errorMessage({ message: prediction.message }));
    }
  }
}
export default function* root() {
  yield all([
    yield debounce(1000, dogClassified.type, removeUrlResource),
    yield takeEvery(setPristine.type, setPristineSage),
    // i had to use debounce because of problems with image loading (need more time for investigation
    yield debounce(1000, changeDog.type, changeDogImage)
  ]);
}
