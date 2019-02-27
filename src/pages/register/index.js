import React,{ PureComponent } from 'react';
import { RegisterWrapper, RegisterBox, Input, Button,RegisterNav,RegisterItem } from './style'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { actionCreators } from'./store';

class Register extends PureComponent{
	
	render() {
		const { registerStatus } = this.props;
		if(!registerStatus){
			return (
				<RegisterWrapper>
					<RegisterBox>
						<RegisterNav>
							<Link to='/login'><RegisterItem className='left '>登录</RegisterItem></Link>
							<RegisterItem className='right active'>注册</RegisterItem>
						</RegisterNav>
						<Input placeholder='你的昵称' ref={(input) => {this.name = input}}/>
						<Input placeholder='账号' ref={(input) => {this.account = input}} />
						<Input placeholder='设置密码' type='password' ref={(input) => {this.password = input}}/>
						<Button onClick={() =>this.props.register(this.name,this.account,this.password)}>注册</Button>
					</RegisterBox>
				</RegisterWrapper>
			)
		}else{
			return <Redirect to='/login' />;
		}
	}
}

const mapState = (state) => ({
	registerStatus: state.getIn(['register','register'])
});

const mapDispatch = (dispatch) => ({
	register(nameElem,accountElem,passwordElem){
		dispatch(actionCreators.register(nameElem.value,accountElem.value,passwordElem.value));
	}
});

export default connect(mapState,mapDispatch)(Register);