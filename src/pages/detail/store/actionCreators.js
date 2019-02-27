import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title,date,scan,label,content) => ({
	type: constants.CHANGE_DETAIL,
	title,
	date,
	scan,
	label,
	content
})

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/api/detail.json?id=' + id).then((res) => {
			const result = res.data.data;
			dispatch(changeDetail(result.title,result.date,result.scan,result.label,result.content));
		})
	}
}
