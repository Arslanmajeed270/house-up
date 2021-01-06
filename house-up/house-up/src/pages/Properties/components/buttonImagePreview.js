import React from "react";
import { useLightbox } from "simple-react-lightbox";

/*
We can use the provided hook in case you want
to open the lightbox from a button or anything :)
*/

const Button = (props) => {
  const { openLightbox } = useLightbox();
  return (
    <button
    className="pxp-sp-gallery-btn"
      onClick={() => openLightbox(props.imageToOpen)}
    >
      See All Photos
    </button>
  );
};

export default Button;