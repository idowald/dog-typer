import { State } from "../reducers/reducer";

export const getUrl = ({ dog: { dogPlaceHolderUrl } }: State) =>
  dogPlaceHolderUrl;

export const getModelLoaded = ({ dog: { modelLoaded } }: State) =>
    modelLoaded;
