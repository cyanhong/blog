import styled from 'styled-components';
import logopic from '../../statics/banner1.jpg';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 1200px;
	margin: 0 auto;
`;

export const HomeBanner = styled.div`
	height: 437.5px;
	width: 1200px;
	margin: 40px auto 25px auto;
	background: url(${logopic});
	background-size: contain;
`;
export const HomeLeft = styled.div`
	width: 820px;
	float: left;
	margin-top: 25px;
	background: #fff;
`;
export const HomeRight = styled.div`
	float: right;
	width: 350px;
	margin-top: 25px;
	margin-bottom: 25px;
`;
export const TopicWrapper = styled.div`
	overflow: hidden;
	background: #fff;
`;
export const TopicTitle = styled.div`
	height: 40px;
	overflow: hidden;
	line-height: 40px;
	border-bottom: 1px #efefef solid;
`;
export const TopicWord = styled.div`
	font-size: 18px;
	margin-left: 20px;
	color: #333;
`;
export const TopicItem = styled.div`
	width: 275px;
	height: 240px;
	margin-left: 20px;
	margin-top: 10px;
	float: left;
`;
export const TopicImg = styled.div`
	overflow: hidden;
	position: relative;
	width: 275px;
	height: 150px;
		.topic-img{
		width: 275px;
		height: 150px;
	}
`;
export const TopicText = styled.div`
	position:absolute;
	top: 50px;
	font-size: 26px;
	margin: 15px 85px;
	color: #fff;
	font-weight: 800;
`;
export const TopicInfo = styled.div`
	font-size: 13px;
	line-height: 22px;
	padding: 15px 0px;
	color: #333;
`;
export const ListWrapper = styled.div`
	width: 820px;
`;
export const ListNav = styled.div`
	height: 40px;
	overflow: hidden;
	line-height: 40px;
	border-bottom: 1px #efefef solid;
`;
export const ListWord = styled.div`
	font-size: 18px;
	margin-left: 20px;
	color: #333;
`;
export const ListItem = styled.div`
	height: 170px;
	overflow: hidden;
	border-bottom: 1px #efefef solid;
	display: block;
	.title {
		font-size: 18px;
		line-height: 30px;
		font-weight: bold;
		color: #333;
		margin-top: 20px;
		margin-left: 30px;
	}
	.desc {
		font-size: 13px;
		line-height: 24px;
		color: #999;
		margin: 15px 50px 0 30px;
	}
	a{
		text-decoration:none;
	}
`;

export const ListHead = styled.div`
	float: left;
	margin: 20px 10px 20px 30px;
	.head-img{
		width: 25px;
		height: 25px;
		border-radius: 50%;
	}
`;
export const ListName = styled.div`
	font-size: 12px;
	color: #999;
	float:left;
	margin-top: 28px;
`;
export const ListDate = styled.div`
	font-size: 12px;
	color: #999;
	margin-top: 26px;
	margin-left: 10px;
	float: left;
`;
export const ListScan = styled.div`
	font-size: 12px;
	color: #999;
	margin-top: 26px;
	margin-right: 10px;
	padding: 0 5px;
	float: right;
`;

export const ListComment = styled.div`
	font-size: 12px;
	color: #999;
	float: right;
	margin-top: 26px;
	padding: 0 5px;
`;
export const ListGood = styled.div`
	font-size: 12px;
	color: #999;
	float: right;
	margin-top: 26px;
	padding: 0 10px;
`;
export const LoadMore = styled.div`
	width: 780px;
	height: 40px;
	line-height: 40px;
	background: #a5a5a5;
	text-align: center;
	border-radius: 20px;
	color: #fff;
	margin: 30px 20px;
	cursor: pointer;
`;
export const IntroWrapper = styled.div`
	width: 350px;
	background: #fff;
`;
export const IntroImg = styled.div`
	height: 210px;
	.intro-img{
		height: 200px;
		width: 350px;
	}
`;
export const IntroInfo = styled.div`
	padding: 0 20px;
	.intro-title {
		font-size: 18px;
		line-height: 30px;
	}
	.intro-text {
		margin: 10px 0;
		font-size: 12px;
		line-height: 24px;
		color: #666;
	}
`;
export const IntroList = styled.div`
	height: 90px;
	background: #fdfdfd;
	border-top: 1px solid #efefef;
`;
export const IntroItem = styled.div`
	width: 88px;
	display: block;
	.intro-article{
		font-size: 14px;
		margin: 20px 30px;
		padding: 0 30px;
		position: absolute;
	}
	.article-num{
		font-size: 14px;
		position: absolute;
		margin: 50px 30px 10px 30px;
		padding: 0 33px;
	}
	.intro-fan{
		font-size: 14px;
		margin: 20px 30px;
		padding: 0 120px;
		position: absolute;
	}
	.fan-num{
		font-size: 14px;
		position: absolute;
		margin: 50px 30px 10px 30px;
		padding: 0 123px;
	}
	.intro-like{
		font-size: 14px;
		margin: 20px 30px;
		padding: 0 210px;
		position: absolute;
	}
	.like-num{
		font-size: 14px;
		position: absolute;
		margin: 50px 30px 10px 30px;
		padding: 0 213px;
	}
`;
export const LabelWrapper = styled.div`
	width: 350px;
	margin-top: 20px;
	background: #fff;
`;
export const LabelNav = styled.div`
	height: 40px;
	overflow: hidden;
	line-height: 40px;
	border-bottom: 1px #efefef solid;
	.label-nav{
		font-size: 18px;
		margin-left: 20px;
	}
`;
export const LabelItem = styled.div`
	height: 35px;
`;
export const LabelTitle = styled.div`
	font-size: 13px;
	color: #333;
	float: left;
	margin-left: 20px;
	padding: 10px 0;
`;
export const LabelNum = styled.div`
	font-size: 12px;
	color: #858585;
	float: right;
	margin-right: 20px;
	padding: 10px 0;
	cursor: pointer;
`;
export const LabelBottom = styled.div`
	text-align: center;
	font-size: 14px;
	padding: 20px 0;
	cursor: pointer;
	color: #2C74E6;
`;
export const FileWrapper = styled.div`
	width: 350px;
	margin-top: 20px;
	background: #fff;
`;
export const FileNav = styled.div`
	height: 40px;
	overflow: hidden;
	line-height: 40px;
	border-bottom: 1px #efefef solid;
	.file-nav{
		font-size: 18px;
		margin-left: 20px;
	}
`;
export const FileItem = styled.div`
	height: 35px;
`;
export const FileTitle = styled.div`
	font-size: 13px;
	color: #333;
	float: left;
	margin-left: 20px;
	padding: 10px 0;
`;
export const FileNum = styled.div`
	font-size: 12px;
	color: #858585;
	float: right;
	margin-right: 20px;
	padding: 10px 0;
	cursor: pointer;
`;
export const FileBottom = styled.div`
	text-align: center;
	font-size: 14px;
	padding: 20px 0;
	cursor: pointer;
	color: #2C74E6;
`;
export const BackTop = styled.div`
	position: fixed;
	right: 40px;
	bottom: 80px;
	width: 50px;
	height: 50px;
	border: 1px solid #dcdcdc;
	display: block;
	cursor: pointer;
	.backtop{
		font-size: 24px;
		line-height: 50px;
		padding: 0 15px;
		color: #333;
	}
`;