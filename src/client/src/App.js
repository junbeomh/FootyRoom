import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Components/Nav/nav.js';
import Fixtures from './Components/Fixtures/fixtures.js';
import Standings from './Components/Standings/standings.js';
import Stats from './Components/Stats/stats.js';
import Teams from './Components/Teams/teams.js';


import "./styles/index.css";
import Games from "./Containers/Games";
import {
  getGameScores,
  getFixturesData
} from "../api"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      playoffSeries: [],
    };
  }

  // async componentWillMount() {
  //   const gameScores = await getGameScores();
  //   console.log(gameScores.data.api.fixtures); // all fixtures for that round 
  //   this.setState({
  //     games: getFixturesData(gameScores.data.api.fixtures),
  //   })
  //   console.log(this.state.games);
  // }

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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
