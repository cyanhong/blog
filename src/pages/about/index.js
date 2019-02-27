import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
	AboutWrapper, 
	AboutNav,
	AboutItem,
	AboutInfo
} from './style';

class About extends PureComponent {

	render() {
		console.log(this.props.basic);
		return(
			<AboutWrapper>
				<h3 className='about-me'>博主简介</h3>
				<p className='me-content'>陈艳红，女，97年出生，大四学生，就读于湖南科技大学计算机学院，对于前端开发一直有很大的兴趣和热情，也在不断的努力提高个人技能水平，花费一周时间终于把这个个人博客网站成功完成，由于水平有限，还有很多不足之处，希望在每次动手实践中得到成长。</p>
				<AboutItem className='basic'>基本信息 <AboutInfo dangerouslySetInnerHTML={{__html:this.props.basic }} /></AboutItem>
				<AboutItem className='special'>掌握技能<AboutInfo dangerouslySetInnerHTML={{__html:this.props.special }} /></AboutItem>
				<AboutItem className='honor'>荣誉奖励<AboutInfo dangerouslySetInnerHTML={{__html:this.props.honor }} /></AboutItem>
				<AboutItem className='myself'>自我评价<AboutInfo dangerouslySetInnerHTML={{__html:this.props.myself }} /></AboutItem>
			</AboutWrapper>
		)
	}
	componentDidMount() {
		this.props.getAbout();
	}
}

const mapState = (state) => ({
	basic:state.getIn(['about','basic']),
	special: state.getIn(['about','special']),
	honor: state.getIn(['about','honor']),
	myself: state.getIn(['about','myself']),
})
const mapDispatch = (dispatch) => ({
	getAbout() {
		dispatch(actionCreators.getAbout())
	}
})
export default connect(mapState,mapDispatch)(About);