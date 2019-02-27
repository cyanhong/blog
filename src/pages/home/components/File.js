import React,{ PureComponent } from 'react';
import { actionCreators } from '../store';
import { connect } from 'react-redux';
import {
	FileWrapper,
	FileNav,
	FileItem,
	FileTitle,
	FileNum,
	FileBottom
} from '../style';

class File extends PureComponent {
	render() {
		const { list,getMoreFile } = this.props;
		return(
			<FileWrapper> 
				<FileNav><h3 className='file-nav'>归档</h3></FileNav>
				{
					list.map((item,index) => {
						return(
							<FileItem key={index}>
								<FileTitle>{item.get('date')}</FileTitle>
								<FileNum>{item.get('num')}</FileNum>
							</FileItem>
						)
					})
					}
				<FileBottom onClick={() => getMoreFile()}>展开</FileBottom>
			</FileWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home','fileList'])
});

const mapDispatch = (dispatch) => ({
	getMoreFile() {
		dispatch(actionCreators.getMoreFile());
	}
});

export default connect(mapState,mapDispatch)(File);