import { fromJS } from 'immutable';
import * as constants from './constants';


const defaultState = fromJS({
	register: false
});

export default (state = defaultState,action) => {
	switch(action.type) {
		case constants.CHANGE_REGISTER:
			return state.set('register',action.value);
// 		case constants.LOG_OUT:
// 			return state.set('login',action.value);
		default:
			return state;
	}
}