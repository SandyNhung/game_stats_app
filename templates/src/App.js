import React from 'react';
import './App.css';
import {Link, BrowserRouter, Switch} from 'react-router-dom'
import LiveGame from './components/LiveGame'
import MatchHistory from './components/MatchHistory'
import Stats from './components/Stats'
import LogIn from './components/LogIn';

function App() {
  return (
    <BrowserRouter>
      <div className="pushable">
        <div className="ui container">
          <div className="ui main menu">
              <div className="item">
                <Link to="/">LogIn</Link>
              </div>
              <div className="item">
                <Link to="/live-game">Live Game</Link>
              </div>
              <div className="item">
                <Link to="/match-history">Match History</Link>
              </div>
              <div className="item">
                <Link to="/stats">Stats</Link>
              </div>
          </div>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <BrowserRouter path="/" exact >
              <LogIn />
            </BrowserRouter>
            <BrowserRouter path="/live-game">
              <LiveGame />
            </BrowserRouter>
            <BrowserRouter path="/match-history">
              <MatchHistory />
            </BrowserRouter>
            <BrowserRouter path="/stats">
              <Stats />
            </BrowserRouter>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
