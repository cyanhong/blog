import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import{
	ComWrapper,	ContentWrapper,ContentNav,
	ContentTitle,ContentDate,ContentScan,
	ContentLabel,ContentInfo,CommentWrapper,
	CommentNav,CommentTitle,CommentInfo,
	CommentButton,NewWrapper,NewNav,
	NewTitle,NewItem,NewInfo
} from './style';

class Detail extends PureComponent{
	render() {
		return (
			<ComWrapper>
					<ContentWrapper> 
						<ContentNav>
							<ContentTitle>{this.props.title}</ContentTitle>
							<ContentDate>{this.props.date}</ContentDate>
							<ContentScan>阅读数:<span>{this.props.scan}</span></ContentScan>
							<ContentLabel>标签：<span>{this.props.label}</span></ContentLabel>
						</ContentNav>
						<ContentInfo dangerouslySetInnerHTML={{__html:this.props.content }} />
						<CommentWrapper> 
							<CommentNav><CommentTitle>评论</CommentTitle></CommentNav>
							<CommentInfo></CommentInfo>
							<CommentButton>发布</CommentButton>
						</CommentWrapper>
					</ContentWrapper>
					<NewWrapper> 
						<NewNav><NewTitle>最新文章</NewTitle></NewNav>
						<NewItem>
							<NewInfo>Linux Mysql5.7.10修改root初始密码</NewInfo>
							<NewInfo>学习iOS开发前要知道的事儿</NewInfo>
							<NewInfo>非常吊炸天的Xcode插件，你想要的这都有</NewInfo>
							<NewInfo>Linux Mysql5.7.10修改root初始密码</NewInfo>
						</NewItem>
					</NewWrapper>
			</ComWrapper>
		)
	}
	componentDidMount() {
		this.props.getDetail(this.props.match.params.id);
	}
}

const mapState = (state) => ({
	title:state.getIn(['detail','title']),
	date: state.getIn(['detail','date']),
	scan: state.getIn(['detail','scan']),
	label: state.getIn(['detail','label']),
	content: state.getIn(['detail','content']),
})

const mapDispatch = (dispatch) => ({
	getDetail(id){
		dispatch(actionCreators.getDetail(id));
	}
});

export default connect(mapState,mapDispatch)(withRouter(Detail));
