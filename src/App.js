import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from './components/header/header'
import Home from './components/home/home'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />

                    <Route exact path="/" component={Home}/>
                </div>
            </Router>
        )
    }
}

export default App;
