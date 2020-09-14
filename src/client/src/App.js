import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Components/Nav/nav.js';
import Fixtures from './Components/Fixtures/fixtures.js';
import Standings from './Components/Standings/standings.js';
import Stats from './Components/Stats/stats.js';
import Teams from './Components/Teams/teams.js';
import Fixture from './Components/Match/match.js';
import "./styles/index.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      playoffSeries: [],
    };
  }

  render() {
    const styles = {
      padding: '20px',
      width: '250px',
      height: '250px',
      backgroundColor: 'yellow',
    };

    return (
      <Router>
        <div id="App">
          <Navigation />
          <Switch>
            {/* <Route path='/' exact component={<Games games={this.state.games} />}/> */}
            {/* <Games games={this.state.games} /> */}
            <Route path='/' exact component={Fixtures} />
            <Route path='/standings' component={Standings} />
            <Route path='/stats' component={Stats} style={styles}/>
            <Route path='/teams' component={Teams} />
            <Route path='/fixture/' component={Fixture} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
