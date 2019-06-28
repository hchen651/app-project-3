import React from "react";
import { Route, Redirect } from "react-router-dom";

export default class ProtectedRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: localStorage.getItem('imprintAuth')
    };
  }

  render() {
    const { component: Component, ...props } = this.props

    return (
      <Route 
        {...props} 
        render={props => (
          this.state.authenticated ?
            <Component {...props} /> :
            <Redirect to='/signin' />
        )} 
      />
    )
  }
}