import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	title: '',
	date: '',
	scan: '',
	label: '',
	content: ''	
});

export default (state = defaultState,action) => {
	switch(action.type) {
		case constants.CHANGE_DETAIL:
			return state.merge({
				title:action.title,
				content: action.content,
				scan:action.scan,
				label:action.label,
				date:action.date
			})
		default:
			return state;
	}
}

