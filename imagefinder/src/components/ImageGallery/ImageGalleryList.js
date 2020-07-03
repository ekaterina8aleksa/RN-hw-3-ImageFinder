import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import PropTypes from "prop-types";
import styles from "../styles.css";

const ImageGalleryList = ({ images, onImgClick }) => {
  return (
    <>
      <ul className={styles.ImageGallery}>
        {images.map(({ id, tags, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            tags={tags}
            previewImg={webformatURL}
            largeImageURL={largeImageURL}
            onImgClick={onImgClick}
          />
        ))}
      </ul>
    </>
  );
};

ImageGalleryList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGalleryList;
