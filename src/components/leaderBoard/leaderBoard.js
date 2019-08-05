import React, {Component} from 'react'
import {connect} from 'react-redux'

class LeaderBoard extends Component {
    render() {
        const users = Object.keys({
            ...this.props.users
        })
        const usersDetails = users.map(user => {
            return {
                id: this.props.users[user].id,
                avatarURL: this.props.users[user].avatarURL,
                name: this.props.users[user].name,
                questionsNumber: this.props.users[user].questions.length,
                answersNumbers: Object
                    .keys(this.props.users[user].answers)
                    .length,
                total: function () {
                    return this.answersNumbers + this.questionsNumber
                }
            }
        })
        usersDetails.sort((a, b) => b.total() - a.total())
        return (
            <div className="container">
                <div className="row">
                    <div className="col s3"></div>
                    <div className="col s6">
                        {usersDetails.map(user => (
                            <div key={user.id} className="container-all container-score">
                                <div className="label  background-trophy"></div>
                                <div className="container-data">
                                    <div key={user.id} className="grid-container">
                                        <div className="container-img grid-item">
                                            <img src={user.avatarURL} alt="user profile"/>
                                        </div>
                                        <div className="SubContainer-data grid-item">
                                            <div>
                                                <p>{user.name}</p>
                                            </div>
                                            <div>
                                                <span>Answered questions</span>
                                                <span>{user.answersNumbers}</span>
                                            </div>
                                            <div>
                                                <span>Created questions</span>
                                                <span>{user.questionsNumber}</span>
                                            </div>
                                        </div>
                                        <div className="grid-item center container-header-score">
                                            <p>Score</p>
                                            <span className="Badges">{user.total()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col s3"></div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({users: state.users}))(LeaderBoard)