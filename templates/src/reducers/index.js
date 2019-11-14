import {combineReducers} from 'redux'
import championList from './championList'
import errorHandle from './errorHandle'
import logIn from './LogIn'
import search from './Search'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    championList: championList,
    error: errorHandle,
    search: search,
    logIn: logIn, 
    form: formReducer
});