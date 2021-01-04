import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PublicRoute = ({
    isNotAuthenticated,
    component : Component,
    ...rest
 }) => (
    <Route {...rest} component={(props) => (
        isNotAuthenticated ? (
            <div>
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/Dashboard" />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isNotAuthenticated: !state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);