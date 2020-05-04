import React, {Component} from "react";
import {Link} from "react-router-dom";

class InfoModule extends Component {

  constructor(props) {
		super(props);
		this.state = {
			genre: ''
		}
  }
  
  componentWillMount() {
    if(this.props.module.indexOf("2b3e915a") === -1){
      this.setState({ genre: "Mujer" });
    }else{
      this.setState({ genre: "Hombre" });
    }
  }
    
  stylesImage = image_link => ({
    backgroundImage: `url(${image_link})`,
  });

  element = () => {

    let element = (
      <div className="col-8 col-md-6">
        <h2>{this.state.genre}</h2>
        <Link to={this.props.module}>
          <div className="square" style={this.stylesImage(this.props.module)}/>
        </Link>
      </div>
    );
    return element;
  };

  render() {
    return this.element(this.props.module);
  }
}

InfoModule.propTypes = {
};

export default InfoModule;
