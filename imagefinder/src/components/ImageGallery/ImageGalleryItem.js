import React from "react";
import PropTypes from "prop-types";
import errorImage from "../../services/errorImage";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({
  id,
  tags,
  previewImg,
  largeImageURL,
  onImgClick,
}) => {
  return (
    <li key={id} className={styles.imageGalleryItem}>
      <img
        src={previewImg}
        alt={tags}
        onClick={() => onImgClick(largeImageURL)}
        className={styles.imageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  previewImg: errorImage,
  largeImageURL: errorImage,
  tags: "sorry =( no info",
};

ImageGalleryItem.propTypes = {
  previewImg: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
