import React, {Component} from "react";
import {Link} from "react-router-dom";
import ElTiempoLogo from "../../images/ElTiempoLogo.png";
class HeaderPrivate extends Component {
  constructor(props, context) {
    super(props, context);

      this.state = {
        name_avatar: this.props.name_avatar,
        visible: false,
        cont: 1
      };
  }

  render() {
    return (
      <div>

        <nav className="navbar fixed-top">
          <Link to="/Main">
            <img alt="ElTiempoLogo" src={ElTiempoLogo} style={{width: "20%"}}/>
          </Link>
        <hr></hr>
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown">
                {/* <a href="/" className="dropdown-item" >Cerrar Sesión</a> */}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default HeaderPrivate;
