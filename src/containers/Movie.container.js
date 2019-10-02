import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getMovie,
  showLoadingSpinner,
  clearMovie,
  setMoviePersistedState
} from '../actions';
import Movie from '../components/Movie/Movie';

class MovieContainer extends Component {
  static propTypes = {
    match: PropTypes.object,
    setMoviePersistedState: PropTypes.func,
    getMovie: PropTypes.func,
    movie: PropTypes.object,
    clearMovie: PropTypes.func,
    showLoadingSpinner: PropTypes.func,
    loading: PropTypes.bool
  };

  componentDidMount () {
    const { movieId } = this.props.match.params;

    if (sessionStorage.getItem(`${movieId}`)) {
      const movie = JSON.parse(sessionStorage.getItem(`${movieId}`));
      this.props.setMoviePersistedState(movie);
    } else {
      this.props.getMovie(movieId);
    }
  }

  componentDidUpdate () {
    const { movieId } = this.props.match.params;
    const { movie } = this.props;

    if (movie) {
      const persistedMovieState = { movie };
      sessionStorage.setItem(`${movieId}`, JSON.stringify(persistedMovieState));
    }
  }

  getMovie = movieId => {
    this.props.clearMovie();
    this.props.showLoadingSpinner();
    this.props.getMovie(movieId);
  };

  render () {
    return <Movie movie={this.props.movie} loading={this.props.loading} />;
  }
}

const mapStateToProps = state => {
  return state.movie;
};

const mapDispatchToProps = {
  getMovie,
  clearMovie,
  showLoadingSpinner,
  setMoviePersistedState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
