import React from 'react';
import {Link, BrowserRouter, Switch} from 'react-router-dom'
import LiveGame from './components/LiveGame'
import MatchHistory from './components/MatchHistory'
import Stats from './components/Stats'
import LogIn from './components/LogIn';
import ListChampions from './components/Champion/ListChampions'

function NavBar() {
  return (
    <BrowserRouter>
      <div>
        <div className="ui container">
          <div className="ui secondary menu">
              <Link to="/" className="item">LogIn</Link>
              <Link to="/live-game" className="item">Live Game</Link>
              <Link to="/match-history" className="item">Match History</Link>
              <Link to="/champions" className="item">Champions</Link>
          </div>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <BrowserRouter path="/" exact >
              <LogIn />
            </BrowserRouter>
            <BrowserRouter path="/live-game" exact>
              <LiveGame />
            </BrowserRouter>
            <BrowserRouter path="/match-history" exact>
              <MatchHistory />
            </BrowserRouter>
            <BrowserRouter path="/stats" exact>
              <Stats />
            </BrowserRouter>

            <BrowserRouter path="/champions" exact>
              <ListChampions />
            </BrowserRouter>

          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};


export default NavBar;
