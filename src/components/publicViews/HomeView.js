import React, {Component} from 'react';
import 'antd/dist/antd.css';
import ElTiempo from "../../images/ElTiempo.jpg";


class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      };
  };


  element = () => (
    <div >
      <center>
        <img alt="ElTiempo"
          src={ElTiempo}
          style={{width: "100%", height: "60%", display:"block", margin:"auto"}}
          >
        </img>
      </center>
    </div>
  );
  render() {
    return this.element();
  }
}
export default HomeView;
