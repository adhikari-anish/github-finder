import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearSearches: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter smth", "light");
    } else {
      this.props.searchUser(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    const { showClear, clearSearches } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            value={this.state.text}
            placeholder="Search User..."
            onChange={this.onChange} //discards the reference type as a whole, takes the value of this.onChange and passes it on. So any further operation "losses" this.
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-block" onClick={clearSearches}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
