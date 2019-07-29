import {SELECT_USER} from '../actions/shared'

export default function login(state = '', action){
    switch(action.type){
        case SELECT_USER:
            return action.user
        default:
            return state
    }
}