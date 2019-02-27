import axios from 'axios';
import * as constants from './constants';


const changeAbout = (basic,special,honor,myself) => ({
	type: constants.CHANGE_ABOUT,
	basic,
	special,
	honor,
	myself
});

export const getAbout = () => {
	return (dispatch) => {
		axios.get('/api/aboutme.json').then((res) => {
			const result = res.data.data;
			// console.log(res);
			dispatch(changeAbout(result.basic,result.special,result.honor,result.myself));
		})
	}
}
