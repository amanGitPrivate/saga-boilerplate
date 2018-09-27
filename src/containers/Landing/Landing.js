import React, { Component } from 'react';
import LandingComponent from '../../components/LandingComponent';

class Landing extends Component {
  
  render() {
    const {history} = this.props;
    return (
      <div>
        <LandingComponent history={history}/>
      </div>
    );
  }
}

export default Landing;
