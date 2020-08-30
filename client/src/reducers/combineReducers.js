import nameReducer from './name'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    name:nameReducer
})

export default allReducers