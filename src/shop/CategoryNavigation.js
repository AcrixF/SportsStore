import React, {Component} from 'react';
import { ToggleLink} from "../ToggleLink";

export class CategoryNavigation extends Component {

    /*
    * <Link/> -->  When the user clicks a Link, the browser is asked to navigate to a new URL without sending any HTTP requests or reloading the application.
    **/

    render = () =>  <React.Fragment>
        {/*
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

      */}

                        <ToggleLink to={ this.props.baseUrl } exact={true}>All</ToggleLink>
                        {   this.props.categories
                                &&
                            this.props.categories.map( cat => <ToggleLink key={cat}
                                                                          to={`${this.props.baseUrl}/${cat.toLowerCase()}`}>
                                                                            {cat}
                                                                          </ToggleLink>
                            )
                        }

                    </React.Fragment>
}
