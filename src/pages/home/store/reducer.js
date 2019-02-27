import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	articlePage: 1,
	showScroll: false,
	labelList:[],
	fileList: [],
	introductionList: [{
		article:'24',
		fan: '108',
		like: '66',
	}]
});

const changeHomeData = (state,action) => {
	return state.merge ({
		topicList: fromJS(action.topicList),
		labelList: fromJS(action.labelList),
		articleList: fromJS(action.articleList),
		fileList: fromJS(action.fileList)
	})
};

export default (state = defaultState,action) => {
	switch(action.type) {
		case constants.CHANGE_HOME_DATA:
			return changeHomeData(state,action)
		case constants.ADD_ARTICLE_LIST:
			return state.merge({
				'articleList':state.get('articleList').concat(action.list),
				'articlePage':action.nextpage
			})
		case constants.ADD_LABEL_LIST:
			return state.merge({
				'labelList':state.get('labelList').concat(action.list),
			})
			case constants.ADD_FILE_LIST:
			return state.merge({
				'fileList':state.get('fileList').concat(action.list),
			})
		case constants.TOGGLE_SCROLL_TOP:
			return state.set('showScroll',action.show);
		default:
			return state;
	}
}