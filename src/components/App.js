import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
