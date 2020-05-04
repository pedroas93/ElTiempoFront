import React, {Component} from "react";
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';

// redux
// import {connect} from 'react-redux';
// import {SetMenuManager} from '../PrivateViews/Menu_Actions';

class MenuList extends Component {

  render() {
    return (
      <ul className="submenu">
        <li className={this.props.disabled ? "disabled" : "enabled"}>
          <Link  id="shop" to="/Shop">
            <span className="icon dripicons-toggles"/>
            <b>Ropa</b>
          </Link>
        </li>
        <li className={this.props.disabled ? "disabled" : "enabled"}>
          <Link  id="aboutUs" to="/aboutUS">
            <span className="icon dripicons-toggles"/>
            <b>Acerca de nosotros</b>
          </Link>
        </li>
        <li className={this.props.disabled ? "disabled" : "enabled"}>
          <Link id="certificates"
                to="/ContactUs">
            <span className="icon dripicons-copy"/>
            <b>Contactanos</b>
          </Link>
        </li>
      </ul>
    );
  }
}

// MenuList.propTypes = {
//   disabled: PropTypes.bool.isRequired,
// };

// const mapStateToProps = state => ({
//   menu: state.menu.menu
// })


export default MenuList;
