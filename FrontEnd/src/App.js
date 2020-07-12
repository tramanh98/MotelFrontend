import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import { DefaultLayout } from "./layout/default";
import MotelDetail from './pages/MotelDetail/index';
import Home from './pages/Home/Home';
import MotelResults from './pages/SearchResultsMotel/index';
// import Profile from './Profile/default'
// import Booking from './Booking/index'
import Posts from './pages/Posting/index1'
import {ProtectedRoute} from './PublicComponent/ProtectedRoute/index'
import EditProfile from './pages/Profile/NavDashboard/editAccount/edit'
import ListRoom from './pages/Profile/NavDashboard/index/ListRoom'
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
            <ProtectedRoute path="/profile/index" component={ListRoom} />
            {/* <Redirect exact path="/" to="/posting" /> */}
            <Redirect exact path="/" to="/posting" />
            <ProtectedRoute path="/posting" edit={false} component={Posts} />
            <Redirect exact path="/" to="/update/post/:idPost" />
            <ProtectedRoute path="/update/post/:idPost" component={Posts} />
          </Switch>
        </DefaultLayout>
      </div>
    );
  }
}

export default App;
