import {
  GET_MOVIE,
  SHOW_LOADING_SPINNER,
  CLEAR_MOVIE,
  SET_MOVIE_PERSISTED_STATE
} from '../actions';

const defaultState = {
  movie: null,
  loading: false
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_MOVIE_PERSISTED_STATE:
      return {
        ...state,
        ...action.payload
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload.movie,
        loading: false
      };
    case SHOW_LOADING_SPINNER:
      return {
        ...state,
        loading: true
      };
    case CLEAR_MOVIE:
      return {
        ...state,
        movie: null
      };
    default:
      return state;
  }
}
