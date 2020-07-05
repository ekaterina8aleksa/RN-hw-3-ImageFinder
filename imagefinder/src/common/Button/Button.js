import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ nameBtn, onLoadMoreBtnClick }) => (
  <button type="button" className={styles.button} onClick={onLoadMoreBtnClick}>
    <span> {nameBtn}</span>
  </button>
);

Button.propTypes = {
  onLoadMoreBtnClick: PropTypes.func.isRequired,
  nameBtn: PropTypes.string.isRequired,
};

export default Button;
