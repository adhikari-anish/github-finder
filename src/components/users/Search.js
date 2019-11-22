import React, { Component } from "react";

class Search extends Component {
  state = {
    text: ""
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    // console.log(this.state.text);
    this.props.searchUser(this.state.text);
  };

  render() {
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
      </div>
    );
  }
}

export default Search;
