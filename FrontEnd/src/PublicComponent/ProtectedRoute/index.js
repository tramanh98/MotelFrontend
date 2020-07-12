import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuthContext } from '../../others/contexts/auth.context';
export const ProtectedRoute =  ({ component: Component, ...rest}) => {
    const { user } = useAuthContext();
    console.log(user)
    return(
        <Route {...rest}
        render = {props => {
            if (user){
                return <Component { ...props }/>; }
            else {
                return <Redirect to="/home"/>
                }
            }   
            
        } />
    );
}