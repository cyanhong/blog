import styled from 'styled-components';

export const RegisterWrapper = styled.div`
	z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
`;

export const RegisterBox = styled.div`
	width:400px;
	height: 280px;
	margin: 100px auto;
	background: #fff;
	padding-top: 20px;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
`;
export const RegisterNav = styled.div`
	height: 60px;
`;
export const RegisterItem = styled.div`
	font-size: 20px;
	line-height:40px;
	color: #969696;
	&.left{
		float: left;
		margin-left: 110px;
		border-bottom: 2px solid #efefef;
	}
	&.right{
		float: right;
		margin-right: 110px;
		border-bottom: 2px solid #efefef;
	}
	&.active{
		color: #2C74E6;
	}
`;
export const Input = styled.input`
	display: block;
	width: 200px;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
	color: #777;
	margin: 10px auto;
`;
export const Button = styled.div`
	width: 220px;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
	color: #fff;
	background: #3194d0;
	border-radius: 15px;
	margin: 10px auto;
	text-align: center;
`
