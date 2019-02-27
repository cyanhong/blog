import React,{ PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button,LoginNav,LoginItem } from './style'
import { connect } from 'react-redux';
import { actionCreators } from'./store';
import { Link } from 'react-router-dom';


class Login extends PureComponent{
	render() {
		const { loginStatus } = this.props;
		if(!loginStatus){
			return (
				<LoginWrapper>
					<LoginBox>
						<LoginNav>
							<LoginItem className='left active'>登录</LoginItem>
							<Link to='/register'><LoginItem className='right'>注册</LoginItem></Link>
						</LoginNav>
						<Input placeholder='账号' ref={(input) => {this.account = input}}/>
						<Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
						<Button onClick={() => this.props.login(this.account,this.password)}>登录</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else{
			return <Redirect to='/' />;
		}
		
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login','login'])
});
const mapDisPatch = (dispatch) => ({
	login(accountElem,passwordElem){
		dispatch(actionCreators.login(accountElem.value,passwordElem.value))
	}
});

export default connect(mapState,mapDisPatch)(Login);