import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Loader.module.css";

const Spinner = () => {
  return (
    <Loader
      className={styles.spinner}
      type="Hearts"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
};

export default Spinner;
