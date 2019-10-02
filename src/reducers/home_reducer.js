import {
  SHOW_LOADING_SPINNER,
  CLEAR_MOVIES,
  SEARCH_MOVIES,
  GET_POPULAR_MOVIES,
  SET_POPULAR_PERSISTED_STATE
} from '../actions';

const defaultState = {
  movies: [],
  loading: false,
  searchTerm: ''
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_POPULAR_PERSISTED_STATE:
      return {
        ...state,
        ...action.payload
      };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.payload.results,
        loading: false,
        searchTerm: ''
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload.results,
        loading: false,
        searchTerm: action.payload.searchTerm
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: []
      };
    case SHOW_LOADING_SPINNER:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
