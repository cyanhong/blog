import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	basic: '',
	special:'',
	honor:'',
	myself:''	
});


export default (state = defaultState,action) => {
	switch(action.type) {
		case constants.CHANGE_ABOUT:
			return state.merge({
				basic:action.basic,
				special: action.special,
				honor:action.honor,
				myself:action.myself,
			})
		default:
			return state;
	}
}


