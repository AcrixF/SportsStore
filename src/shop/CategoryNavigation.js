import React, {Component} from 'react';
import { Link } from "react-router-dom";

export class CategoryNavigation extends Component {

    /*
    * <Link/> -->  When the user clicks a Link, the browser is asked to navigate to a new URL without sending any HTTP requests or reloading the application.
    **/

    render = () =>  <React.Fragment>
                        <Link className="btn btn-secondary btn-block"
                              to={ this.props.baseUrl}>All</Link>
                        {
                            this.props.categories
                                &&
                            this.props.categories.map( cat =>   <Link className="btn btn-secondary btn-block"
                                                                      key={cat}
                                                                      to={`${this.props.baseUrl}/${cat.toLowerCase()}`}
                                                                > { cat }
                                                                </Link>)
                        }
                    </React.Fragment>
}
