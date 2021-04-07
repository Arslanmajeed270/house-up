import React from 'react'
import ImageGallery from 'react-image-gallery';

const imagesHandler = (imagesParam) => {
  const images = [];
  imagesParam.map( image => (
    images.push({
      original: image.imageURL,
      thumbnail: image.imageURL,
    })
  ) );
  return images;
}


export default function imageGallery({imageList}) {
  return (
      <ImageGallery items={imagesHandler(imageList)} thumbnailPosition="right" />
  )
}
