import {RECEIVE_DATA} from '../actions/shared'
import {ADD_QUESTION} from '../actions/questions'


export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.questions
        case ADD_QUESTION:
            return action.questions
        default:
            return state

    }
}