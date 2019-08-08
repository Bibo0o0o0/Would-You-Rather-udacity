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
<<<<<<< HEAD
                  pathname: "/signin",
                  state: { from: rest.path }
                }}
              />
            )
          }
        />
      )
=======
                pathname: '/signin',
                state: {
                    from: routeProps.location,
                }
            }}/>)}/>
    )
>>>>>>> 4143def7ec6b4f37346a6266c75074acf1316e9b
}

export default PrivateRoute