import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
	TopicWrapper,
	TopicTitle,
	TopicWord,
	TopicItem,
	TopicImg,
	TopicInfo,
	TopicText
} from '../style';

class Topic extends PureComponent {
	render() {
		return(
			<TopicWrapper>
				<TopicTitle>
					<TopicWord>
						一些关于我的事
					</TopicWord>
				</TopicTitle>
				{
					this.props.list.map((item) => {
						return(
							<TopicItem key={item.get('id')}>
								<TopicImg>
									<img 
										className='topic-img'
										alt=''
										src={item.get('imgUrl')}
									/>
									<TopicText>{item.get('title')}</TopicText>
								</TopicImg>
								<TopicInfo>
									{item.get('text')}
								</TopicInfo>
							</TopicItem>
						)
					})
				}
			</TopicWrapper>
		)
	}
}

const mapState = (state) => ({
	list:state.get('home').get('topicList')
});


export default connect(mapState,null)(Topic);