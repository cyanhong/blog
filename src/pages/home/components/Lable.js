import React,{ PureComponent } from 'react';
import { actionCreators } from '../store';
import { connect } from 'react-redux';
import {
	LabelWrapper,
	LabelNav,
	LabelItem,
	LabelTitle,
	LabelNum,
	LabelBottom
} from '../style';

class Label extends PureComponent {

	render() {
		const { list, getMoreLabel} = this.props;
		return(
			<LabelWrapper> 
				<LabelNav><h3 className='label-nav'>个人分类</h3></LabelNav>
				{
					list.map((item,index) => {
						return(
							<LabelItem key={index}>
								<LabelTitle>{item.get('title')}</LabelTitle>
								<LabelNum>{item.get('num')}</LabelNum>
							</LabelItem>
						)
					})	
				}
				<LabelBottom onClick={() => getMoreLabel()}>展开</LabelBottom>
			</LabelWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home','labelList'])
});
const mapDispatch = (dispatch) => ({
	getMoreLabel(){
		dispatch(actionCreators.getMoreLabel());
	}
})
export default connect(mapState,mapDispatch)(Label);