import React, {Component} from 'react'
import {connect} from 'react-redux'

class LeaderBoard extends Component {
    render() {
        return (
            <div>
                leader Board
            </div>
        )
    }
}

export default connect(state => ({questions: state.questions}))(LeaderBoard)