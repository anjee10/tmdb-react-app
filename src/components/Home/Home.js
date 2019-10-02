import React from 'react';
import PropTypes from 'prop-types';

import { Grid, MovieThumb, Search, Spinner } from '../../components';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import './Home.css';

const Home = ({ movies, loading, searchTerm, searchMovies }) => (
  <div className="home">
    <div>
      <Search searchTerm={searchTerm} callback={searchMovies} />
    </div>
    <div className="home-grid">
      <Grid
        header={searchTerm ? 'Search Result(s)' : 'Popular Movies'}
        loading={loading}
      >
        {movies.map((element, i) => (
          <MovieThumb
            key={i}
            clickable={true}
            image={
              element.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`
                : './src/images/no_image.jpg'
            }
            movieId={element.id}
            movieName={element.original_title}
          />
        ))}
      </Grid>
      {loading ? <Spinner /> : null}
    </div>
  </div>
);

Home.propTypes = {
  movies: PropTypes.object,
  loading: PropTypes.bool,
  searchTerm: PropTypes.string,
  searchMovies: PropTypes.func
};

export default Home;
