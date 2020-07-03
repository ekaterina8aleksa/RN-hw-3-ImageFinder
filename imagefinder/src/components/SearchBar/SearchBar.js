import React, { Component } from "react";
import styles from "../styles.css";

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
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormbutton}>
            <span className="SearchFormbuttonlabel">Search</span>
          </button>

          <input
            className={styles.SearchForminput}
            type="text"
            autocomplete="off"
            autofocus
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
