import {combineReducers} from 'redux'

import users from './users'
import loading from './loading'
import login from './login'
import user from './selectedUser'

export default combineReducers({
    users,
    loading,
    login,
    user
})