import {_saveQuestion, _getQuestions, _getUsers, _saveQuestionAnswer} from '../../_DATA'
<<<<<<< HEAD
import {handleLoader, handleSelectedUser} from './shared'
=======
import {handleLoader} from './shared'
>>>>>>> 4143def7ec6b4f37346a6266c75074acf1316e9b
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
<<<<<<< HEAD
        console.log(data)
        return Promise.all([
=======
        return  Promise.all([
>>>>>>> 4143def7ec6b4f37346a6266c75074acf1316e9b
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
<<<<<<< HEAD
        ]).then(() => {
=======
        ]).then((response) => {
            console.log(response)
>>>>>>> 4143def7ec6b4f37346a6266c75074acf1316e9b
            Promise.all([
                _getQuestions(),
                _getUsers()
            ]).then(([questions, users]) => {
                dispatch(saveQuestionAnswer(questions))
                dispatch(handleGetUsers(users))
<<<<<<< HEAD
                dispatch(handleSelectedUser(data.authedUser))
=======
>>>>>>> 4143def7ec6b4f37346a6266c75074acf1316e9b
                dispatch(handleLoader(false))
            })
        })
    }
}