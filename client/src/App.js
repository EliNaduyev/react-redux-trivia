import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Room from './components/Room/Room'
import LoadingRoom from './components/LoadingRoom/LoadingRoom'
import Results from './components/Results/Results'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'exact component={HomePage} />
          <Route path='/loadingroom' component={LoadingRoom} />
          <Route path='/room' component={Room} />
          <Route path='/results' component={Results} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
