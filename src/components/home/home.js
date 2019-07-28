import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleLogin} from '../../redux/actions/shared'

class Home extends Component {
    login = () => {
        this
            .props
            .dispatch(handleLogin())
    }
    render() {
        return (
            <div>
                home
            </div>
        )
    }
}

export default connect(state => ({users: state.users}))(Home)