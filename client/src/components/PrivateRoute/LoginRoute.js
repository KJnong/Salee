import React from 'react';
import auth from './auth'
import {Redirect, Route, Link } from "react-router-dom";

 const SaleeRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render=
        {props => {
            if (auth.isAthenticated()) {
                return <Redirect to={{pathname:"/retailer"}}/>
            }
            else{
                return <Component {...props} />
            }

        }} />
    )
}
export default SaleeRoute;