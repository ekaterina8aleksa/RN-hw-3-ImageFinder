import React from "react";
import PropTypes from "prop-types";
import styles from "../styles.css";

const ImageGalleryItem = ({
  id,
  tags,
  previewImg,
  largeImageURL,
  onImgClick,
}) => {
  return (
    <li key={id} className={styles.ImageGalleryItem}>
      <img
        src={previewImg}
        alt={tags}
        onClick={() => onImgClick(largeImageURL)}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  previewImg:
    "https://pypik.ru/uploads/posts/2018-09/1536907413_foto-net-no-ya-krasivaya-4.jpg",
  largeImageURL:
    "https://pypik.ru/uploads/posts/2018-09/1536907413_foto-net-no-ya-krasivaya-4.jpg",
  tags: "sorry =( no info",
};

ImageGalleryItem.propTypes = {
  previewImg: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  onImgClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
