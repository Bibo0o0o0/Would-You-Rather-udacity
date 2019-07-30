import {_saveQuestion, _getQuestions} from '../../_DATA'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion(questions){
    return {
        type: ADD_QUESTION,
        questions,
    }
}

export function addQuestionHandle (data) {
    return (dispatch, getState) => {
        return  Promise.all([
            _saveQuestion(data),
            // _getQuestions()
        ]).then(([question]) => {
            let questions = getState().questions
            dispatch(addQuestion(questions))
        })
    }
}