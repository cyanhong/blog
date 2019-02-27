import React,{ PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators }  from './store';
import { Link } from 'react-router-dom';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
	HeaderWrapper, 
	Titile,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoItem,
	SearchInfoList
} from './style';

class Header extends PureComponent{

	getListArea() {
		const { focused, list} =this.props;
		if(focused) {
			return(
				<SearchInfo>
					<SearchInfoTitle>
						热门搜索
					</SearchInfoTitle>
					<SearchInfoList>
					{
						list.map((item) => {
							return <SearchInfoItem key={item}>{item}</SearchInfoItem>
						})
					}
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null;
		}
	}

	render() {
		const { focused,handleInputFocus, handleInputBlur,list,login,logout} =this.props;
		return (
			<HeaderWrapper>
				<Link to='/'><Titile>陈艳红的个人博客</Titile></Link>
				<Nav>
					<NavItem className='left active'><Link to='/'>首页</Link></NavItem>
					<NavItem className='left'><Link to='/bloglist'> 文章</Link></NavItem>
					<NavItem className='left'><Link to='/aboutme'>关于我</Link></NavItem>
					{
						login ? 
							<NavItem onClick={logout} className='right'>退出</NavItem> :
							<Link to='/login'> <NavItem className='right'>登录</NavItem></Link>
					}
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused':''}
								onFocus={() => handleInputFocus(list)}
								onBlur={handleInputBlur}
							>
							</NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont':'iconfont'}>&#xe614;</i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to='/write'>
						<Button className='writting'>
							<i className="iconfont">&#xe601;</i>写文章
						</Button>
					</Link>
					<Link to='/register'><Button className='reg'>注册</Button></Link>
				</Addition>
			</HeaderWrapper>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header','focused']),
		list: state.getIn(['header','list']),
		login: state.getIn(['login','login'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		logout(){
			dispatch(loginActionCreators.logout());
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);