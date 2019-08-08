import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function PrivateRoute ({component: Component, ...rest}){
    console.log(rest)
    return (
        <Route
          {...rest}
          render={props =>
            rest.login ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/signin",
                  state: { from: rest.path }
                }}
              />
            )
          }
        />
      )
}

export default PrivateRoute