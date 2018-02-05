import React from 'react';
import Link from 'gatsby-link';
import { Item } from 'semantic-ui-react';
import image from '../../assets/images/image.png'

class MediaSidebarComponent extends React.Component {
  render() {
    return (      
		<Item.Group divided>
			<Item>
				<Item.Image size='small' src={image} />
				<Item.Content verticalAlign='middle'>Content A</Item.Content>
			</Item>

			<Item>
				<Item.Image size='small' src={image} />
				<Item.Content verticalAlign='middle'>Content B</Item.Content>
			</Item>

			<Item>
				<Item.Image size='small' src={image} />
				<Item.Content content='Content C' verticalAlign='middle' />
			</Item>
		</Item.Group>
    );
  }
}

export default MediaSidebarComponent;


