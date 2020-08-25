import { put, debounce, select, all, call, fork, takeEvery } from "redux-saga/effects";
import {changeDog} from "../actions/action";
import { imageService } from "../services/imageService";
import { getUrl } from "../selectors/dogSelector";

function* removeUrlResource({}: ReturnType<typeof changeDog>) {
  const url = yield select(getUrl);
  imageService.revokeUrl(url);
}

export default function* root() {
  yield all([yield debounce(1000, changeDog.type, removeUrlResource)]);
}
