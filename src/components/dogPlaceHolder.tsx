import * as React from "react";

// props from parent element
interface OwnProps {
  dogPlaceHolderUrl: string;
}

export const DogPlaceHolder = ({ dogPlaceHolderUrl }: OwnProps) => {
  return (
    <div>
      <img id="output" src={dogPlaceHolderUrl} height="360px" width="640px" />
    </div>
  );
};

