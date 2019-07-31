import {_saveQuestion, _getQuestions} from '../../_DATA'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion(questions){
    return {
        type: ADD_QUESTION,
        questions,
    }
}

export function addQuestionHandle (data) {
    return (dispatch) => {
        return  Promise.all([
            _saveQuestion(data)
        ]).then(([question]) => {
            console.log(question)
            Promise.all([
                _getQuestions()
            ]).then(([questions]) => {
                console.log(questions)
                dispatch(addQuestion(questions))
            })
        })
    }
}