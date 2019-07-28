import {combineReducers} from 'redux'

import users from './users'
import loading from './loading'
import login from './login'

export default combineReducers({
    users,
    loading,
    login
})