import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import store from '../../store'

function mapStateToProps(state) {
  return {
    genre: state.genre
  }
}

class InfoModule extends Component {

  constructor(props) {
    super(props);
    this.state = {
      genre: ''
    }
  }


  componentWillMount() {
    let genreComponent = ''
    if (this.props.module.indexOf("woman") === -1) {
      this.setState({ genre: "Hombre" });
      genreComponent = 'Hombre'
    } else {
      this.setState({ genre: "Mujer" });
      genreComponent = 'Mujer'

    }

    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        genreComponent
      }
    })
  }

  stylesImage = image_link => ({
    backgroundImage: `url(${image_link})`,
  });


  element = () => {
    let element = (
      <Provider
        store={store}
      >
        <div className="col-8 col-md-6">
          {mapStateToProps.list}
          <Link to={'/Shop/Clothes/Mujer'}>
            <div className="square" style={this.stylesImage(this.props.module)} />
          </Link>
        </div>
      </Provider>
    );
    if(this.state.genre === 'Hombre'){
      element = (
        <Provider
          store={store}
        >
          <div className="col-8 col-md-6">
            {mapStateToProps.list}
            <Link to={'/Shop/Clothes/Hombre'}>
              <div className="square" style={this.stylesImage(this.props.module)} />
            </Link>
          </div>
        </Provider>
      );
    }
    return element;

  };


  render() {

    return this.element(this.props.module);
  }
}

export default connect(mapStateToProps)(InfoModule);
