import styled from 'styled-components';

export const AboutWrapper = styled.div`
	width:1200px;
	margin: 25px auto;
	background: #fff;
	height: 500px;
	.about-me{
		padding: 50px 50px;
		line-height: 30px;
		font-weight: bold;
		font-size: 22px;
	}
	.me-content{
		font-size: 16px;
		padding: 10px 50px;
		line-height: 20px;
		color: #555;
	}
`;
export const AboutItem = styled.div`
	font-size: 16px;
	color: #555;
	margin: 50px 0 50px 32px;
	padding: 20px 15px;
	height: 200px;

	&.basic{
		float:left;
		color:#2C74E6;
		width: 200px;
	}
	&.special{
		float:left;	
		color:#2C74E6;
		width: 250px;
	}
	&.honor{
		float:left;	
		color:#2C74E6;
		width: 230px;
	}
	&.myself{
		float:right;
		margin-right:30px;
		color:#2C74E6;
		width: 230px;
	}
	p{
		margin: 15px 0;
	}
`;
export const AboutInfo = styled.div`
	font-size: 14px;
	color: #555;
	line-height: 25px;
	margin-top: 20px;
`;