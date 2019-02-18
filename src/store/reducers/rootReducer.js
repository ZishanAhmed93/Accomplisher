import authReducer from './authReducer'
import accomplishmentReducer from './accomplishmentReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	auth: authReducer,
	accomplishment: accomplishmentReducer
})

export default rootReducer