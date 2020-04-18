import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/ComponentStyle/Router.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from '../App'
import Login from "../components/Login-Register/Login";
import SignUp from "../components/Login-Register/Register";

class Router1 extends React.Component {

  state = { userName: '' }

  userAuth = (data) => {
      this.setState({ userName: data.username})
  }

  render() {


    return (<Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="nav-link" to={"/"}>Home</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <p className="user-name">{this.state.userName}</p>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div>
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/sign-in"
                render={props => (
                  <Login {...props} userAuthProp={this.userAuth} />)}
              />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </div>
      </div></Router>
    );
  }
}

export default Router1;