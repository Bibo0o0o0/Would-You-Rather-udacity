import {_saveQuestion, _getQuestions, _getUsers, _saveQuestionAnswer} from '../../_DATA'
import {handleLoader} from './shared'
import {handleGetUsers} from '../actions/users'


export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION_ANSWERE = 'SAVE_QUESTION_ANSWERE'

function addQuestion(questions){
    return {
        type: ADD_QUESTION,
        questions,
    }
}

export function addQuestionHandle (data) {
    return (dispatch) => {
        dispatch(handleLoader(true))
        return  Promise.all([
            _saveQuestion(data)
        ]).then(() => {
            Promise.all([
                _getQuestions(),
                _getUsers()
            ]).then(([questions, users]) => {
                dispatch(addQuestion(questions))
                dispatch(handleGetUsers(users))
                dispatch(handleLoader(false))
            })
        })
    }
}

function saveQuestionAnswer(questions){
    return {
        type: SAVE_QUESTION_ANSWERE,
        questions
    }
}

export function handleSaveQuestionAnswer (data) {
    return (dispatch) => {
        dispatch(handleLoader(true))
        return  Promise.all([
            _saveQuestionAnswer(data)
        ]).then((response) => {
            console.log(response)
            Promise.all([
                _getQuestions(),
                _getUsers()
            ]).then(([questions, users]) => {
                dispatch(saveQuestionAnswer(questions))
                dispatch(handleGetUsers(users))
                dispatch(handleLoader(false))
            })
        })
    }
}