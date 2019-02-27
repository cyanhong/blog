import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	labelList: result.labelList,
	fileList: result.fileList
});

const addHomeList = (list,nextpage) => ({
	type: constants.ADD_ARTICLE_LIST,
	list: fromJS(list),
	nextpage
});

const addLabelList = (list) => ({
	type: constants.ADD_LABEL_LIST,
	list: fromJS(list)
});
const addFileList = (list) => ({
	type: constants.ADD_FILE_LIST,
	list: fromJS(list)
});
export const getHomeInfo = () => {
	return(dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(changeHomeData(result));
		})
	}
}

export const getMoreList =(page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result,page+1));
		})
	}
};
export const getMoreLabel = () => {
	return(dispatch) => {
		axios.get('api/label.json').then((res) => {
			const result = res.data.data;
			dispatch(addLabelList(result));
		})
	}
};
export const getMoreFile = () => {
	return(dispatch) => {
		axios.get('api/file.json').then((res) => {
			const result = res.data.data;
			dispatch(addFileList(result));
		})
	}
};
export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show
});