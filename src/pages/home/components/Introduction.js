import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	IntroWrapper,
	IntroImg,
	IntroInfo,
	IntroList,
	IntroItem
} from '../style';

class Introduction extends PureComponent {
	render() {
		return(
			<IntroWrapper> 
				<IntroImg>
					<img 
						className='intro-img'
						src='https://demo.salongweb.com/mnews/images/default-thumb.jpg'
						alt=''
					/>
				</IntroImg>
					<IntroInfo>
						<h3 className='intro-title'>博主简介</h3>
						<p className='intro-text'>陈艳红，女，目前就读于湖南科技大学，热爱前端技术，并希望能寻求到一份前端工作。</p>
						<p className='intro-text'>熟悉Javascript、CSS、HTML技术，能够熟练编写前端页面，有React.js框架开发经验，了解ES6技术和python开发语言，有过scrapy框架编写python爬虫经验。</p>
						<p className='intro-text'>对前端开发有较大热情，学习能力强，具有较好的团队合作精神，抗压能力较强。</p>
					</IntroInfo>
				<IntroList>
				{
					this.props.list.map((item,index) => {
						return(
							<IntroItem key={index}>
								<span className='intro-article'>文章</span>
								<span className='article-num'>{item.get('article')}</span>
								<span className='intro-fan'>粉丝</span>
								<span className='fan-num'>{item.get('fan')}</span>
								<span className='intro-like'>喜欢</span>
								<span className='like-num'>{item.get('like')}</span>
							</IntroItem>
						)
					})
				}
					
				</IntroList>
			</IntroWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.get('home').get('introductionList')
})

export default connect(mapState,null)(Introduction);