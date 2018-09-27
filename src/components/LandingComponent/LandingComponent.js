import React, { Component } from 'react';
import Header from '../../components/common/Header';
import './LandingComponent.scss';

class LandingComponent extends Component {

  gotoBtw = () => {
    this.props.history.push('./breakThroughWork')
  }  

  render() {
    return (
      <div>
        <Header gotoBtw={this.gotoBtw}/>
        <div className={'caseStudyWrapper'}>
        </div>
      </div>
    );
  }
}

export default LandingComponent;
