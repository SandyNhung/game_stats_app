import {combineReducers} from 'redux'
import championList from './championList'
import errorHandle from './errorHandle'

export default combineReducers({
    championList: championList,
    error: errorHandle
});