import React, {Component} from 'react';
import {Router, Route} from "react-router-dom"
import Header from './components/header/header'
import Home from './components/home/home'
import SignIn from './components/signin/signin'
import {connect} from 'react-redux'
import {handleInitialData} from './redux/actions/shared'
import history from './history'
import PrivateRoute from './components/privateRoute/privateRoute'
import NewQuestion from './components/newQuestion/newQuestion'
import LeaderBoard from './components/leaderBoard/leaderBoard'
import Loader from './components/loader/loader'
import Question from './components/question/question'

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
                    <PrivateRoute path="/" component={Home} login={this.props.login}/>
                    <PrivateRoute
                        path="/new-question"
                        component={NewQuestion}
                        login={this.props.login}/>
                    <PrivateRoute
                        path="/leader-board"
                        component={LeaderBoard}
                        login={this.props.login}/>

                    <PrivateRoute
                        path="/questions/:questionID"
                        component={Question}
                        login={this.props.login}/>

                    <Route
                        exact
                        path="/signin"
                        render={(routeProps) => <SignIn {...routeProps} users={this.props.users}/>}/> 
                        {this.props.loading
                        ? <Loader/>
                        : null}
                </div>
            </Router>
        )
    }
}

export default connect(state => ({loading: state.loading, login: state.login, users: state.users}))(App);
