import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeRegister = () => ({
	type: constants.CHANGE_REGISTER,
	value: true
})

export const register = (name,account,password) => {
	return (dispatch) => {
		axios.get('/api/register.json?name='+ '&account' + account +'&password' + password).then((res) => {
			const result = res.data.data;
			if(result) {
				dispatch(changeRegister());
			}else{
				alert('failed')
			}
			console.log(res);
		});
	}
};
// export const logout = () => ({
// 	type:constants.LOG_OUT,
// 	value: false
// })
