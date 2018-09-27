import React, { Component } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import Landing from './containers/Landing'
import BreakThroughWork from './containers/BreakThroughWork/BreakThroughWork';

class App extends Component {

  render() {
    return (
      <Router> 
        <Switch>
          <Route exact path="/"  component={Landing} />
          <Route exact path="/breakThroughWork"  component={BreakThroughWork} />
        </Switch>
      </Router>
    );
  }
}

export default App;
