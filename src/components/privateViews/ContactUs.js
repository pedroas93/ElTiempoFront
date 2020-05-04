import React, { Component } from 'react';
import MenuList from './MenuList';
import HeaderPrivate from './HeaderPrivate';
class ContactUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Loading: false
        }
    }

    element = () => (
        <div className="container-fluid">
            <div className="sidebar">
                <MenuList disabled={this.state.loading} />
            </div>

            <div className="row">
                <div className="col private-wrapper">
                    <HeaderPrivate menu_list={this.state.loading} />
                    <div className="wrapper">
                        <div className="borderLine"></div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-xl-8">
                                <h1><span className="icon dripicons-article" />Contactanos : </h1>
                            </div>
                            <div className="container">
                                <div className="d-flex justify-content-between">
                                    <div className="col-7">
                                        <ul className="socialShare">
                                            <div className="col-lg-10 col-xl-8">
                                                <li key={Math.random()}>
                                                    <a href={"https://www.facebook.com/eltiempo"} className={"facebookIcon"}>{"Facebook"}</a>

                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
    render() {
        return this.element();
    }
}
export default ContactUs;