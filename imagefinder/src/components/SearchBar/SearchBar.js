import React, { Component } from "react";
import styles from "./SearchBar.module.css";

class SearchBar extends Component {
  state = { query: "" };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query);
    this.setState({ query: "" });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={styles.bar}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.searchButton}>
            <span className={styles.searchButtonLabel}>Search</span>
          </button>

          <input
            className={styles.searchInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
