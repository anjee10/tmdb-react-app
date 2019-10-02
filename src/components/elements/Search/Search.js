import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import logo from '../../../images/tmdb_logo.svg';

class Search extends Component {
  state = {
    value: ''
  };

  // Must have this here so we can reset it
  timeout = null;

  doSearch = event => {
    const value = event.target.value;
    this.setState({ value });
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.callback(value);
    }, 500);
  };

  render () {
    const { value } = this.state;
    const { searchTerm } = this.props;

    return (
      <div className="search">
        <div className="tmdb-logo">
          <img className="tmdb" src={logo} alt="tmdb-logo" />
        </div>
        <div className="search-content">
          <input
            type="text"
            className="search-input"
            placeholder="Search Movie Title..."
            onChange={this.doSearch}
            value={searchTerm || value}
          />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  callback: PropTypes.func,
  searchTerm: PropTypes.string
};

export default Search;
