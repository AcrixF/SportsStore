import { connect } from "react-redux";
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Shop } from "./Shop";
import { DataTypes } from "../data/Types";
import { loadData } from "../data/ActionCreators";


/*
*   The advantage of this approach is that it simplifies adding features or making changes to the application
*   because the components that present content to the user receive their data via props without the need to
*   obtain it directly from the data store or the URL routing system.
*/

/*  --> The connect function is used to link a component to a data store so that its props are either values
        from the data store or functions that dispatch data store actions when they are invoked.
    --> With React Redux, your components never access the store directly - connect
*/
/*
*
* connect() Parameters:
                -->     mapStateToProps?: Function
                -->     mapDispatchToProps?: Function | Object
                -->     mergeProps?: Function
                -->     options?: Object

   1 -->    If a mapStateToProps function is specified, the new wrapper component will subscribe to Redux store updates.
            This means that any time the store is updated, mapStateToProps will be called.
   2 -->
* */

const mapStateToProps = (dataStore) => ({...dataStore});

const mapDispatchToProps = {
    loadData
};

const filterProduct = (products = [], category ) =>
    (!category || category === "All") ? products: products.filter( p => p.category.toLocaleLowerCase() === category.toLowerCase());


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





