import {LOGIN} from '../actions/shared'

export default function login(state = false, action){
    switch(action.type){
        case LOGIN:
            return true
        default:
            return state
    }
}