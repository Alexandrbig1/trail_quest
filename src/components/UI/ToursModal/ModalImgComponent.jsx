import PropTypes from "prop-types";
import React from "react";
import { ToursModalImg } from "./ToursModal.styled";

const ModalImgComponent = React.memo(({ img = [], altText = "" }) => (
  <picture>
    {img[2]?.srcWebp && <source srcSet={img[2].srcWebp} type="image/webp" />}
    {img[3]?.srcDesktopWebp && (
      <source
        srcSet={img[3].srcDesktopWebp}
        media="(min-width: 1024px)"
        type="image/webp"
      />
    )}
    {img[0]?.src && <source srcSet={img[0].src} type="image/jpg" />}
    {img[1]?.srcDesktop && (
      <source
        srcSet={img[1].srcDesktop}
        media="(min-width: 1024px)"
        type="image/jpg"
      />
    )}
    <ToursModalImg src={img[0]?.src} alt={altText} />
  </picture>
));

ModalImgComponent.displayName = "ModalImgComponent";

ModalImgComponent.propTypes = {
  img: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      srcDesktop: PropTypes.string,
      srcWebp: PropTypes.string,
      srcDesktopWebp: PropTypes.string,
    })
  ).isRequired,
  altText: PropTypes.string,
};

export default ModalImgComponent;
