import React,{ PureComponent } from 'react';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Lable from './components/Lable';
import File from './components/File';
import Introduction from './components/Introduction';
import { 
	HomeWrapper,
	HomeBanner,
	HomeLeft,
	HomeRight,
	BackTop
} from './style';

class Home extends PureComponent {

	handleScrollTop(){
		window.scrollTo(0,0);
	}

	render() {
		return(
			<HomeWrapper> 
				<HomeBanner />	
				<Topic/>
				<HomeLeft>
					<List/>
				</HomeLeft>
				<HomeRight>
					<Introduction />
					<Lable />
					<File />
				</HomeRight>
				{
					this.props.showScroll ? <BackTop onClick={this.handleScrollTop}><i className="iconfont backtop">&#xe631;</i></BackTop> : null
				}
			</HomeWrapper>
		)
	}

	componentDidMount(){
		this.props.changeHomeData();
		this.bindEvents();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll',this.props.changeScrollTopShow)
	}
	bindEvents(){
		window.addEventListener('scroll',this.props.changeScrollTopShow)
	}
}

const mapState = (state) => ({
	showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
	changeHomeData(){
		dispatch(actionCreators.getHomeInfo());
	},
	changeScrollTopShow() {
		if(document.documentElement.scrollTop >300 ){
			dispatch(actionCreators.toggleTopShow(true));
		}else{
			dispatch(actionCreators.toggleTopShow(false));
		}
	}
})

export default connect(mapState,mapDispatch)(Home);