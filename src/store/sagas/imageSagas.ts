import { changeDog } from "../actions/action";
import { select } from "@redux-saga/core/effects";
import { getUrl } from "../selectors/dogSelector";
import { imageService } from "../services/imageService";

export function* removeUrlResource({}: ReturnType<typeof changeDog>) {
  const url = yield select(getUrl);
  imageService.revokeUrl(url);
}
