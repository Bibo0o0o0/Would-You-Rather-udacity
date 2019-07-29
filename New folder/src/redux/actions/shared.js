import {_getUsers} from '../../_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const LOGIN = 'LOGIN'
export const SELECT_USER = 'SELECT_USER'

function receiveData (users) {
    return {
        type: RECEIVE_DATA,
        users,
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

function selectUser (selectedUser) {
    return{
        type: SELECT_USER,
        user: selectedUser
    }
}

export function handleSelectedUser(selectedUser){
    return dispatch => {
        return dispatch(selectUser(selectedUser))
    }
}