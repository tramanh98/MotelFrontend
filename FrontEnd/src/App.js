import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import { DefaultLayout } from "./layout/default";
import MotelDetail from './MotelDetail/index';
import Home from './Home/Home';
import MotelResults from './SearchResultsMotel/index';
// import Profile from './Profile/default'
// import Booking from './Booking/index'
import Posts from './posting/index'
import {FormLayoutDemo} from './posting/try'
import {ProtectedRoute} from './PublicComponent/ProtectedRoute/index'
import EditProfile from './Profile/NavDashboard/editAccount/edit'
import Account from './Profile/NavDashboard/index/index'
class App extends Component {

  render() {
    return (
      <div>
        <DefaultLayout>
          <Switch>
            <Redirect exact path="/" to="/home" />
            <Route path="/home" render={ props => <Home {...props}/>} />
            <Redirect exact path="/" to="/detail" />
            <Route path="/detail/:idMotel" component={MotelDetail} />
            <Redirect exact path="/" to="/results" />
            <Route path="/results" component={MotelResults} />
            {/* <Redirect exact path="/" to="/profile" /> */}
            <ProtectedRoute path="/profile/edit" component={EditProfile} />
            <ProtectedRoute path="/profile/index" component={Account}/>} />
            {/* <Redirect exact path="/" to="/posting" /> */}
            <ProtectedRoute path="/posting" component={Posts}/>} />
          </Switch>
        </DefaultLayout>
      </div>
    );
  }
}

export default App;
