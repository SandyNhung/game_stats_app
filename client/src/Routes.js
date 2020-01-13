import React from 'react'
import './Routes.css'
import { Link, Router, Switch, Route } from 'react-router-dom'
import LiveGame from './components/LiveGame'
import MatchHistory from './components/MatchHistory'
import Stats from './components/Stats'
import LogIn from './components/LogIn'
import ListChampions from './components/ListChampions'
import history from './history'

function NavBar() {
  return (
    <Router history={history}>
      <div className="hero is-fullheight">
        <div className="hero-head">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-menu">
              <div className="navbar-end">
                <Link to="/" className="navbar-item">
                  LogIn
                </Link>
                <Link to="/live-game" className="navbar-item">
                  Live Game
                </Link>
                <Link to="/match-history" className="navbar-item">
                  Match History
                </Link>
                <Link to="/champions" className="navbar-item">
                  Champions
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <div className="hero-body">
          <Switch>
            <Route path="/" exact>
              <LogIn />
            </Route>
            <Route path="/live-game" exact>
              <LiveGame />
            </Route>
            <Route path="/match-history" exact>
              <MatchHistory />
            </Route>
            <Route path="/stats" exact>
              <Stats />
            </Route>

            <Route path="/champions" exact>
              <ListChampions />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default NavBar
