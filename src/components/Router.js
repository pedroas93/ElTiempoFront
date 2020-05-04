import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from './publicViews/Main';
import AboutUs from './privateViews/AboutUs';
import Shop from './privateViews/Shop';
import ContactUs from './privateViews/ContactUs';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/*PublicViews*/}
          <Route exact path="/main" component={Main} />

          {/*PrivateViews*/}
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/Shop" component={Shop} />

          <Route render={() => <Redirect to="/main"> </Redirect>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
