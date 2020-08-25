import { put, fork, takeEvery } from "redux-saga/effects";
import { add, addFromSaga } from "../actions/action";

function* sendAddAction({ payload }: ReturnType<typeof add>) {
  yield put(addFromSaga(payload));
}
function* handleAdd() {
  console.log(add.type);
  yield takeEvery(add.type, sendAddAction);
}

export default function* root() {
  yield fork(handleAdd);
}
