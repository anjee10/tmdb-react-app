import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.css';

const Movie = ({ movie, loading }) => (
  <div className="movie">
    {movie ? (
      <div>
        <Navigation movie={movie.original_title} />
        <MovieInfo
          movie={movie}
          time={movie.runtime}
          releaseDate={movie.release_date}
          userScore={movie.vote_average}
        />
      </div>
    ) : null}
    {loading ? <Spinner /> : null}
  </div>
);

Movie.propTypes = {
  movie: PropTypes.object,
  loading: PropTypes.bool
};

export default Movie;
