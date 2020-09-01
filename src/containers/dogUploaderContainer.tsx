import { connect } from "react-redux";
import { State } from "../store/reducers/reducer";
import * as React from "react";
import { changeDog } from "../store/actions/action";
import {
  DispatchProps,
  DogUploader
} from "../components/dogUploader/dogUploader";

export const DogUploaderContainer = connect<State, DispatchProps>(
  // @ts-ignore
  ({ dog: { modelLoaded } }: State) => ({ loadingModel: !modelLoaded }),
  (dispatch: any): DispatchProps => ({
    changeDog: (event: React.FormEvent<HTMLInputElement>) => {
      // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
      const target = event.target as HTMLInputElement;
      try {
        if (target && target.files) {
          // Note - in real application we shouldn't send event through sagas, so a bit js should be used in container
          const url = URL.createObjectURL(target.files[0]);
          return dispatch(changeDog({ url }));
        } else {
          console.error("TODO deal with special cases");
          return;
        }
      } catch (e) {
        console.error("TODO deal with special cases");
      }
    }
  })
)(DogUploader);
