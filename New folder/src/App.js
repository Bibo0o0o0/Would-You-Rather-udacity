import React, {Component} from 'react';
import {Router, Route} from "react-router-dom"
import Header from './components/header/header'
import Home from './components/home/home'
import SignIn from './components/signin/signin'
import {connect} from 'react-redux'
import {handleInitialData} from './redux/actions/shared'
import {Redirect} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import history from './history'
class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props

        dispatch(handleInitialData())
    }
    render() {
        if (this.props.loading === true) {
            return (
                <div>
                    loading
                </div>
            )
        }
        return (
            <Router history={history}>
                <div>
                    <Header/>
                    <Route
                        exact
                        path="/"
                        render={props => this.props.login
                        ? (<Home {...props}/>)
                        : (<Redirect
                            to={{
                            pathname: '/signin',
                            state: {
                                from: props.location
                            }
                        }}/>)}/>

                    <Route
                        exact
                        path="/signin"
                        render={(props) => <SignIn {...props} users={this.props.users}/>}/>
                </div>
            </Router>
        )
    }
}

export default connect(state => ({loading: state.loading, login: state.login}))(App);
