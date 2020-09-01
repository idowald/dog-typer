import {select} from "@redux-saga/core/effects";
import {getUrl} from "../../selectors/dogSelector";
import {removeUrlResource} from "../imageSagas";

it("test images sagas effect", () => {
  const gen = removeUrlResource({
    error: false,
    meta: undefined,
    payload: { url: "test" },
    type: ""
  });
  const url = gen.next();
  expect(url.value).toEqual(select(getUrl));
});
