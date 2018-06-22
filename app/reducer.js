import { combineReducers } from 'redux';
import LoginReducer from './screens/login/login.reducer.js';

const reducers = combineReducers({
	login: LoginReducer
});
export default reducers;
