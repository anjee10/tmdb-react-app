# TMDB React App

It uses TMDB API v3 to get movies information, built on react boilerplate `https://github.com/anjee10/react-boilerplate`.

It can

- get popular movies on app load
- search any movies
- navigate back to home page

## Configure TMDB `API KEY`

- Before starting server, need to add TMDB `API_KEY` in `src/config.js` file

## Start server

- `npm run install` to install all dependecies
- `npm run dev:hot` to start the app on `9000` port
- visit `http://localhost:9000`

## Testing

- `storybook` tests (At the moment it has only one story to test)
  - `npm run storybook`
- `npm run lint`
- `npm run test`, generates storyshot snapshots.

### React boilerplate mentioned above is equipped with below tools

- Webpack bundling having local dev server and hot reloading options
- Babel to transpile
- Eslint to lint
- Jest to test
