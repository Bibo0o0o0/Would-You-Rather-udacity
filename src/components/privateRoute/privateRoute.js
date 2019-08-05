import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = (props) => {
    const Component = props.component
    return (
        <Route
            exact
            path={props.path}
            render={routeProps => props.login
            ? (<Component {...routeProps}/>)
            : (<Redirect
                to={{
                pathname: '/signin',
                state: {
                    from: routeProps.location,
                }
            }}/>)}/>
    )
}

export default PrivateRoute