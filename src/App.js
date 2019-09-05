import React from 'react';
import './App.css';
import Home from './components/Home';
import Tiles from './components/Tiles';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <Switch>
          <Route path = '/:country' component = {Tiles} />
        </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
