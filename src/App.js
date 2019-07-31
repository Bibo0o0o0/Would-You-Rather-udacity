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
                    <PrivateRoute path="/" component={Home} login={this.props.login}/>
                    <PrivateRoute path="/new-question" component={NewQuestion} login={this.props.login}/>
                    <PrivateRoute path="/leader-board" component={LeaderBoard} login={this.props.login} />

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
