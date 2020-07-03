import React from "react";
import PropTypes from "prop-types";
import styles from "../styles.css";

const Button = ({ nameBtn, onClick }) => (
  <button type="button" className={styles.Button} onClick={onClick}>
    {nameBtn}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  nameBtn: PropTypes.string.isRequired,
};

export default Button;
