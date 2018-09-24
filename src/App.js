import React, { Component } from 'react';
import logo from './logo.svg';
import {callSwapi} from './redux/actions';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

  callSwapi = () => {
    this.props.callSwapi();
  }

  render() {
    const {SWAPI_DATA} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {SWAPI_DATA}
        <p className="App-intro" onClick={this.callSwapi}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  SWAPI_DATA: state.SWAPI_DATA
})

const mapDispatchToProps = dispatch => ({
  callSwapi: () => dispatch(callSwapi()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

