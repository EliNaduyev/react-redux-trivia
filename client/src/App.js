import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Room from './components/Room/Room'
import LoadingRoom from './components/LoadingRoom/LoadingRoom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'exact component={HomePage} />
          <Route path='/loadingroom' component={LoadingRoom} />
          <Route path='/room' component={Room} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
