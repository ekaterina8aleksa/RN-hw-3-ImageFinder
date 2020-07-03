import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = () => {
  return (
    <Loader
      type="Hearts"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={2000}
    />
  );
};

export default Spinner;
