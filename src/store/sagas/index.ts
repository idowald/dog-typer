import { put, debounce, all, call, fork, takeEvery } from "redux-saga/effects";
import {
  changeDog,
  dogClassified,
  modelLoaded,
  setPristine
} from "../actions/action";
import { dogService } from "../services/dogService";
import { removeUrlResource } from "./imageSagas";
import { changeDogImage, getDogBreeds } from "./dogSagas";

function* setPristineSage() {
  // put anything you want to init here
  yield fork(getDogBreeds);
  yield fork(getModel);
}

function* getModel() {
  yield call(dogService.loadModel);
  yield put(modelLoaded({}));
}
export default function* root() {
  yield all([
    yield debounce(1000, dogClassified.type, removeUrlResource),
    yield takeEvery(setPristine.type, setPristineSage),
    // I had to use debounce because of problems with image loading (need more time for investigation)
    yield debounce(1000, changeDog.type, changeDogImage)
  ]);
}
