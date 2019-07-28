import {_getUsers} from '../../_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const LOGIN = 'LOGIN'

function receiveData (users) {
    return {
        type: RECEIVE_DATA,
        users,
    }
}

function login () {
    return {
        type: LOGIN,
        login: true
    }
}

export function handleLogin () {
    return dispatch => {
        return dispatch(login())
    }
}

export function handleInitialData(){
    return dispatch => {
        return Promise.all([
                _getUsers()
            ]).then(([users]) => {
                dispatch(receiveData(users))
            })
    }
}