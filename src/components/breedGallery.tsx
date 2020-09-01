import * as React from "react";
import VirtualList from "react-tiny-virtual-list";

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
    <VirtualList
      width="100%"
      height={600}
      itemCount={Math.floor(galleryUrls.length / 2)}
      itemSize={360} // Also supports variable heights (array or function getter)
      renderItem={({ index, style }) => (
        <div key={index} style={style}>
          <img
            src={galleryUrls[index * 2]}
            alt="dog breed"
            height="360px"
            width="640px"
          />
          {galleryUrls.length > index * 2 + 1 ? (
            <img
              src={galleryUrls[index * 2 + 1]}
              alt="dog breed2"
              height="360px"
              width="640px"
            />
          ) : null}
        </div>
      )}
    />
  );
};
