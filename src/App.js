import React, {Component} from 'react';
import {Route, Switch, Router, Redirect} from "react-router-dom"
import Header from './components/header/header'
import Home from './components/home/home'
import SignIn from './components/signin/signin'
import {connect} from 'react-redux'
import {handleInitialData} from './redux/actions/shared'
import NewQuestion from './components/newQuestion/newQuestion'
import LeaderBoard from './components/leaderBoard/leaderBoard'
import Loader from './components/loader/loader'
import Question from './components/question/question'
import NoMatch from './components/NoMatch/NoMatch'
import history from './history'

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props

        dispatch(handleInitialData())
    }
    render() {
        return (
            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={routeProps => this.props.login
                            ? (<Home {...routeProps}/>)
                            : (<Redirect
                                to={{
                                pathname: '/signin',
                                state: {
                                    from: routeProps.location
                                }
                            }}/>)}/>
                        <Route
                            exact
                            path="/add"
                            render={routeProps => this.props.login
                            ? (<NewQuestion {...routeProps}/>)
                            : (<Redirect
                                to={{
                                pathname: '/signin',
                                state: {
                                    from: routeProps.location
                                }
                            }}/>)}/>
                        <Route
                            exact
                            path="/leaderboard"
                            render={routeProps => this.props.login
                            ? (<LeaderBoard {...routeProps}/>)
                            : (<Redirect
                                to={{
                                pathname: '/signin',
                                state: {
                                    from: routeProps.location
                                }
                            }}/>)}/>
                        <Route
                            exact
                            path="/questions/:questionID"
                            render={routeProps => this.props.login
                            ? (<Question {...routeProps}/>)
                            : (<Redirect
                                to={{
                                pathname: '/signin',
                                state: {
                                    from: routeProps.location
                                }
                            }}/>)}/>
                        <Route
                            exact
                            path="/signin"
                            render={(routeProps) => <SignIn {...routeProps} users={this.props.users}/>}/>
                        <Route
                            render={routeProps => this.props.login
                            ? (<NoMatch {...routeProps}/>)
                            : (<Redirect
                                to={{
                                pathname: '/signin',
                                state: {
                                    from: routeProps.location
                                }
                            }}/>)}/>
                    </Switch>
                    {this.props.loading
                        ? <Loader/>
                        : null}
                </div>
            </Router>
        )
    }
}

export default connect(state => ({loading: state.loading, login: state.login, users: state.users}))(App)
