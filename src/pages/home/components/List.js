import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import { 
	ListWrapper,
	ListNav,
	ListWord,
	ListItem,
	ListName,
	ListDate,
	ListScan,
	ListComment,
	ListGood,
	ListHead,
	LoadMore
} from '../style';

class List extends PureComponent {
	render() {
		const { list, getMoreList,page} = this.props;
		return(
			<ListWrapper> 
				<ListNav>
					<ListWord>
						最新文章
					</ListWord>
				</ListNav>
				{
					list.map((item,index) => {
						return (
								<ListItem key={index}>
								<Link   to={'/detail/' + item.get('id') }>
									<h3 className='title'>{item.get('title')}</h3>
									<p className='desc'>{item.get('text')}</p>
									<ListHead>
										<img className='head-img' src={item.get('headImg')} alt=''/>
									</ListHead>
									<ListName>cyhhhh</ListName>
									<ListDate>
										<i className="iconfont">&#xe718;</i>{item.get('date')}
									</ListDate>
									<ListGood>
										<i className="iconfont">&#xe64b;</i>{item.get('good')}
									</ListGood>
									<ListComment>
										<i className="iconfont">&#xe891;</i>{item.get('comment')}
									</ListComment>
									<ListScan>
										<i className="iconfont">&#xe61a;</i>{item.get('scan')}
									</ListScan>
									</Link>
								</ListItem>
						)
					})
				}
				<LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
			</ListWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home','articleList']),
	page: state.getIn(['home','articlePage'])
})

const mapDispatch = (dispatch) => ({
	getMoreList(page){
		dispatch(actionCreators.getMoreList(page));
	}
})
export default connect(mapState,mapDispatch)(List);