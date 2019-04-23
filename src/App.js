import React, { Component } from 'react';
import { SportsStoreDataStore } from "./data/DataStore";
import { ShopConnector } from "./shop/ShopConnector";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';

export default class App extends Component {
    render = () => <Provider store={ SportsStoreDataStore}>
        <Router>
          <Switch>
            <Route path="/shop" component={ ShopConnector }/>
            <Redirect to="/shop"/>
          </Switch>
        </Router>
    </Provider>
}


