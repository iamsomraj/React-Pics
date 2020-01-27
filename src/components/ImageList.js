/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const ImageList = props => {
  let ImageList = props.images.map(imageEl => {
    return (
        <img className="ui image"
          key={imageEl.id}
          src={imageEl.urls.regular}
        />
    );
  });
  return <div className="ui small images">{ImageList}</div>;
};

export default ImageList;
