import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="" component={HomePage} />
        <Route exact path="login/" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
