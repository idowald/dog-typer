import * as React from "react";

// props of action-creator
interface DispatchProps {
  // TODO, problem of versions between ActionCreator and Action, needs fixing https://github.com/reduxjs/redux/issues/2709
}

// props from parent element
interface OwnProps {
  galleryUrls: string[];
}

export const BreedGallery = ({ galleryUrls }: OwnProps) => {
  return (
    <div>
      {galleryUrls.map(url => (
        <div key={url}>{url}</div>
      ))}
    </div>
  );
};

// interface ColumnData {
//   dataKey: string;
//   label: string;
//   numeric?: boolean;
//   width: number;
// }
//
// interface Row {
//   index: number;
// }
