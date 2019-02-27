import React,{ PureComponent } from 'react';
import List from '../home/components/List';
import Lable from '../home/components/Lable';
import File from '../home/components/File';
import Introduction from '../home/components/Introduction';
import {
	HomeWrapper, 
	HomeLeft,
	HomeRight,
} from '../home/style';

class BlogList extends PureComponent {

	render() {
		return(
			<HomeWrapper>
			<HomeLeft>
			<List />
			</HomeLeft>
			<HomeRight>
					<Introduction />
					<Lable />
					<File />
				</HomeRight>
			</HomeWrapper>
		)
	}
}



export default BlogList;