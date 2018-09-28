import React, { Component } from 'react';
import Header from '../../components/common/Header';
import './LandingComponent.scss';
import Editor from '../../components/common/Editor';

class LandingComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  gotoBtw = () => {
    this.props.history.push('./breakThroughWork')
  }  

  onChange = (value) => {
    this.setState({value});
  }

  render() {
    return (
      <div>
        <Header gotoBtw={this.gotoBtw}/>
         <Editor />
        <div className={'caseStudyWrapper'}>
        </div>
      </div>
    );
  }
}

export default LandingComponent;
