/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const ImageList = props => {
  let ImageList = props.images.map(imageEl => {
    return (
      <div className="column">
        <div className="ui segment">
          <img
            className="ui medium image"
            key={imageEl.id}
            src={imageEl.urls.regular}
          />
        </div>
      </div>
    );
  });
  return <div className="ui equal width three column divided grid">{ImageList}</div>;
};

export default ImageList;
