import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/** Components */
import Home from './components/Home/Home';
// import TourHome from './components/Tours/Home';

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
