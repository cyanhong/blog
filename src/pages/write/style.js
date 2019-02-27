import styled from 'styled-components';

export const WriteWrapper = styled.div`
	width:1200px;
	margin: 25px auto;

`;
export const WriteLeft = styled.div`
	width: 280px;
	float: left;
	background: #fff;
`;
export const WriteItem = styled.div`
	height: 40px;
	line-height: 40px;
	padding: 0 20px;
	
	border-bottom: 1px solid #efefef;
	&.active{
		background: #2C74E6;
		color: #fff;
	}
	a {
		color: #333;
		text-decoration:none;
	}
`;
export const WriteRight = styled.div`
	width:890px;
	float:right;
	background: #fff;
`;
export const Input = styled.input`
	display: block;
	width: 830px;
	height: 40px;
	line-height: 30px;
	color: #777;
	font-size: 14px;
	border: none;
	background: #eee;
	padding: 0 10px;
	outline: none;
	margin: 20px 20px;
`;
export const TextArea = styled.textarea.attrs({
	placeholder: '请输入正文内容'
})`	
	display: block;
	width: 830px;
	height: 500px;
	line-height: 20px;
	color: #777;
	font-size: 16px;
	border: 1px solid #eee;
	padding: 10px 10px;
	margin: 20px 20px;
`;
export const WriteLabel = styled.div`	
	margin: 20px 20px;
	padding: 5px 0;
	.write-label{
		float:left;
		color: #4f4f4f;
		font-size: 14px;
		margin-top: 8px;
	}
`;
export const LabelInput = styled.input.attrs({
	placeholder: '请输入标签'
})`	
	display: block;
	width: 90px;
	height: 30px;
	line-height: 10px;
	color: #777;
	font-size: 14px;
	padding: 0 10px;
	margin-right: 650px;
	float:right;
	border: none;
	background: #eee;
	border-radius: 5px;
`;
export const Button = styled.div`
	width: 80px;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
	color: #fff;
	background: #3194d0;
	border-radius: 8px;
	margin: 30px auto;
	text-align: center;
	&.preview{
		float: left;
		margin-left: 30px;
	}
	&.save{
		float:left;
		margin-left: 60px;
	}
	&.publish{
		float:right;
		margin-right: 430px;
	}
`;