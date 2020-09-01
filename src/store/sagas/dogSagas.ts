import { call, put, select, take } from "@redux-saga/core/effects";
import {
  dogBreedPictures,
  dogClassified,
  errorMessage,
  modelLoaded
} from "../actions/action";
import { getModelLoaded, getUrl } from "../selectors/dogSelector";
import { dogService } from "../services/dogService";

export function* changeDogImage() {
  // in real apps we can handle logic error flows in more generic way like to listen to all events
  // of some type and clean the error message on start of each.
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
    if (galleryUrls) {
      yield put(dogBreedPictures({ galleryUrls }));
    } else {
      yield put(
        errorMessage({ message: "Could not get the pictures of this dog" })
      );
    }
  } else {
    if (prediction.message) {
      yield put(errorMessage({ message: prediction.message }));
    }
  }
}
