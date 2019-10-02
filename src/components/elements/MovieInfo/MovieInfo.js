import React from 'react';
import {
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_RESOLUTION
} from '../../../config';
import PropTypes from 'prop-types';
import MovieThumb from '../MovieThumb/MovieThumb';
import { calcTime, getReleaseYear } from '../../../helpers.js';
import './MovieInfo.css';

const MovieInfo = ({ movie, time, releaseDate, userScore }) => (
  <div className="movieinfo">
    <div className="movieinfo-backdrop">
      <img
        src={`${IMAGE_BASE_URL}${BACKDROP_RESOLUTION}${movie.backdrop_path}`}
        alt="backdrop"
      />
    </div>
    <div className="movieinfo-content">
      <div className="movieinfo-title">
        <div className="movieinfo-left"></div>
        <div className="movieinfo-right">
          <h1>{movie.title}</h1>
          {getReleaseYear(releaseDate)} - {userScore * 10}% User Score
          <br />
          <br />
          {calcTime(time)}
        </div>
      </div>
      <div className="movieinfo-overview">
        <h3>OVERVIEW</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
    <div className="movieinfo-thumb">
      <MovieThumb
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : './images/no_image.jpg'
        }
        clickable={false}
      />
    </div>
  </div>
);

MovieInfo.propTypes = {
  movie: PropTypes.object,
  time: PropTypes.number,
  releaseDate: PropTypes.string,
  userScore: PropTypes.number
};

export default MovieInfo;
