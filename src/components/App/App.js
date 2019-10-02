import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../containers/Home.container';
import Movie from '../../containers/Movie.container';
import { NotFound } from '../../components';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:movieId" component={Movie} exact />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
