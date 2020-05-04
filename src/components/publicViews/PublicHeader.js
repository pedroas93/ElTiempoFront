import React, {Component} from "react";
import {Link} from "react-router-dom";
import ElTiempoLogo from "../../images/ElTiempoLogo.png";


class PublicHeader extends Component {
  render() {
    return (
      <div className="container-fluid-ak gradient-bk">
        <div className="row">
          <div className="col-auto text-left">
            <Link className="btn btn-primary btn-top" to="/login">
              Ingreso Cuenta
            </Link>
          </div>

          <div className="d-none d-sm-block col header-unlogued mb-2 mt-2">
            <Link to="/resumen">
              <img alt="ElTiempoLogo" src={ElTiempoLogo} style={{width: "20%"}}/>
            </Link>
            </div>
            <div className="d-sm-none col-12 header-unlogued mt-2">
              <Link to="/resumen">
                <img alt="ElTiempoLogo" src={ElTiempoLogo} style={{width: "20%"}} />
              </Link>
            </div>
        </div>
      </div>
    )
  }
}

export default PublicHeader;
