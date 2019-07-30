import React from 'react'

const AnsweredQuestion = (props) => {
    return (
        <div>
            <div className="container-header">
                <p>{props.question.author}</p>
            </div>
            <div className="container-data flex-container">
                <div className="container-img">
                    <img src={`${props.autherAvatar}`} alt="Profile"/>
                </div>
                <div className="SubContainer-data">
                    <p>Would you rather</p>
                    <small>{props.question.optionOne.text}</small>
                    <button className="btn waves-effect waves-light">view Poll</button>
                </div>
            </div>
        </div>
    )
}
export default AnsweredQuestion