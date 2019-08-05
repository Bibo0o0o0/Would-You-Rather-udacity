import React from 'react'
import {connect} from 'react-redux'
import {handleSaveQuestionAnswer} from '../../redux/actions/questions'

const Question = (props) => {
    const question = props.match.params.questionID
    const authorObject = props.users[props.questions[question].author]
    let choiseOne = null
    let choiseTwo = null

    const saveAnswer = () => {
        let choise = null
        if(choiseOne.checked){
            choise = 'optionOne'
        }
        else if (choiseTwo.checked) {
            choise = 'optionTwo'
        }
        else {
            alert('Please, Select an choise')
            return
        }

        props.dispatch(handleSaveQuestionAnswer({authedUser: props.user, qid: question, answer: choise}))
    }

    if (props.user.answers.hasOwnProperty(question)) {
        return (
            <p>answered</p>
        )
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col s3"></div>
                <div className="col s6">
                    <div className="container-all marg-top space-left-right">
                        <div className="container-header">
                            <p>{authorObject.name}asks:</p>
                        </div>
                        <div className="container-data flex-container">
                            <div className="container-img">
                                <img src={authorObject.avatarURL} alt="author profile"/>
                            </div>
                            <div>
                                <p>Would You Rather ...</p>
                                <div>
                                    <label>
                                        <input ref={input => choiseOne = input} type="radio" name="options" value="optionOne"/>
                                        <span>{props.questions[question].optionOne.text}</span>
                                    </label>
                                    <label>
                                        <input ref={input => choiseTwo = input} type="radio" name="options" value="optionTwo"/>
                                        <span>{props.questions[question].optionTwo.text}</span>
                                    </label>
                                </div>
                                <button onClick={saveAnswer} className="waves-effect waves-light btn center">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s3"></div>
            </div>
        </div>
    )
}

export default connect(state => ({questions: state.questions, user: state.user, users: state.users}))(Question)