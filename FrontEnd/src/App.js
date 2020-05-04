import React, { Component } from 'react';
import './App.css';
import banner from './component/banner'


import { Route, Switch, Redirect } from "react-router-dom";
import Login from './component/Login/index';
import {DefaultLayout} from "./layout/default";
import Register from "./component/Register";
import MotelDetail from './MotelDetail/index';
import Home from './home/Home';
import MotelResults from './SearchResultsMotel/index'


class App extends Component {
  
  render() {
    return (
      <div>
        <DefaultLayout>
          <Switch>
              <Redirect exact path="/" to="/home" />
              <Route path="/home" component={Home} />
              <Redirect exact path="/" to="/moteldetail" />
              <Route path="/moteldetail" component={MotelDetail} />
              <Redirect exact path="/" to="/motelresults" />
              <Route path="/motelresults" component={MotelResults} />
          </Switch>
        </DefaultLayout>
      </div>
    );
  }
}

export default App;
