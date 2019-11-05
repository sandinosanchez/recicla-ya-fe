import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegistroPage from '../pages/RegistroPage';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/registro" component={RegistroPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
