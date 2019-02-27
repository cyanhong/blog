import React,{ PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { WriteWrapper,WriteLeft,WriteItem,WriteRight,Input,TextArea,WriteLabel,LabelInput,Button} from './style'

class Write extends PureComponent{
	render() {
		return (
			<WriteWrapper>
				<WriteLeft>
					<WriteItem className='article-manager active'>发布博客</WriteItem>
					<WriteItem><Link to='bloglist'>我的博客</Link></WriteItem>
				</WriteLeft>
				<WriteRight>
					<Input placeholder='输入文章标题' />
					<TextArea></TextArea>
					<WriteLabel>
						<h3 className='write-label'>文章标签:</h3>
						<LabelInput></LabelInput>
					</WriteLabel>
					<Button className='preview'>预览</Button>
					<Button className='save'>保存</Button>
					<Button className='publish'>发布</Button>
				</WriteRight>
			</WriteWrapper>
		)
	}
}

export default Write;