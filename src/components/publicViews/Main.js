import React, {Component} from 'react';
import HomeView from './HomeView';
import PublicHeader from './PublicHeader';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Main: []
    };
  };
  element = () => (
    <div>
        <PublicHeader/>
        <div className="borderLine"></div>
        <HomeView/>
    </div>
  );
  render() {
    return this.element();
  }
}
export default Main;
