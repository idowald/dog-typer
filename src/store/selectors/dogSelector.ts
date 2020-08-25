import { State } from "../reducers/reducer";

export const getUrl = ({ dog: { dogPlaceHolderUrl } }: State) =>
  dogPlaceHolderUrl;
