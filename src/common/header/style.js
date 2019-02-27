import styled from 'styled-components';

export const HeaderWrapper = styled.div`	
	height:58px;
	border-bottom: 1px solid #f0f0f0;
	background: #fff;
`;
export const Titile = styled.div`
	
	position: absolute;
	font-size: 22px;
	display: block;
	color: #444;
	text-decoration:none;
	margin: 18px 170px;
`;
export const Nav = styled.div`	
	width: 750px;
	height: 100%;
	padding-right: 10px;
	box-sizing:border-box;
	margin: 0 400px;
`;

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 20px;	
	font-size: 17px;
	color: #333;
	cursor: pointer;
	&.left {
		float: left;
	}
	&.right {
		float: right;
	}
	a{
		text-decoration:none;
		color: #333;
		&.active {
			color:#2C74E6;
		}
	}
`;
export const SearchWrapper = styled.div`
	z-index: 1;
	position: relative;
	float: left;
	.iconfont {
		position: absolute;
		right: 5px;
		bottom: 5px;
		line-height: 30px;
		width: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`;
export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`	
	width: 160px;
	height:38px;
	padding: 0 30px 0 20px;
	margin-top: 9px;
	margin-left:20px;
	box-sizing:border-box;
	border: none;
	outline: none;
	border-radius:19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder{
		color:#999;
	}
	&.slide-enter {
		width: 160px;
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 160px;
	}
	&.focused {
		width: 240px;
	}
	
`;
export const Addition = styled.div`
	position: absolute;
	right: 150px;
	top: 0;
	height: 56px;
`;
export const Button = styled.div`
	float: right;
	line-height: 38px;
	border-radius: 19px;
	margin-top: 9px;
	border: 1px solid #2C74E6;
	font-size: 14px;
	margin-right: 20px;
	cursor: pointer;
	padding: 0 20px;
	&.reg{
		color: #2C74E6;
	}
	&.writting{
		color:#fff;
		background:#2C74E6;
	}
`;
export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 58px;
	width: 240px;
	padding: 0 20px;
	background: #fff;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
`;
export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;
export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	margin-right: 10px;
	margin-bottom: 10px;
	line-height: 20px;
	padding: 0 5px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;
export const SearchInfoList = styled.div`
	overflow: hidden;
`;