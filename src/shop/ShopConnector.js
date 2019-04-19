import { connect } from "react-redux";
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {Shop} from "./Shop";
import {DataTypes} from "../data/Types";
import {loadData} from "../data/ActionCreators";

const mapStateToProps = (dataStore) => ({...dataStore});

const mapDispatchToProps = {
    loadData
};

const filterProduct = (products = [], category ) => (!category || category === "All") ? products: products.filter( p => p.category.toLocaleLowerCase() === category.toLowerCase());

export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        render() {
            return  <Switch>
                        <Route path="/shop/products/:category?"
                               render={ (routeProps) => <Shop { ...this.props }
                                                              { ...routeProps }
                                                              products={filterProduct(this.props.products, routeProps.match.params.category)}
                                                        />
                               }
                        />
                    </Switch>
        }
        componentDidMount() {
            this.props.loadData(DataTypes.CATEGORIES);
            this.props.loadData(DataTypes.PRODUCTS);
        }
    }
);
