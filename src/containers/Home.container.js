import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getPopularMovies,
  showLoadingSpinner,
  searchMovies,
  clearMovies,
  setPopularPersistedState
} from '../actions';
import { Home } from '../components';

class HomeContainer extends Component {
  static propTypes = {
    setPopularPersistedState: PropTypes.func,
    movies: PropTypes.array,
    searchTerm: PropTypes.string,
    showLoadingSpinner: PropTypes.func,
    getPopularMovies: PropTypes.func,
    clearMovies: PropTypes.func,
    searchMovies: PropTypes.func
  };

  componentDidMount () {
    if (sessionStorage.getItem('HomeState')) {
      const home = JSON.parse(sessionStorage.getItem('HomeState'));
      this.props.setPopularPersistedState(home);
    } else {
      this.getMovies();
    }
  }

  componentDidUpdate () {
    if (this.props.movies.length > 0 && this.props.searchTerm === '') {
      sessionStorage.setItem('HomeState', JSON.stringify(this.props));
    }
  }

  getMovies = () => {
    this.props.showLoadingSpinner();
    this.props.getPopularMovies();
  };

  searchMovies = searchTerm => {
    this.props.clearMovies();
    this.props.showLoadingSpinner();
    this.props.searchMovies(searchTerm);
  };

  render () {
    return <Home {...this.props} searchMovies={this.searchMovies} />;
  }
}

const mapStateToProps = state => {
  return state.home;
};

const mapDispatchToProps = {
  getPopularMovies,
  showLoadingSpinner,
  searchMovies,
  clearMovies,
  setPopularPersistedState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
