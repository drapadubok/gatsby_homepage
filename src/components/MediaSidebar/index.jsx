import React from 'react';
import Link from 'gatsby-link';
import { Item } from 'semantic-ui-react';
import image from '../../assets/images/image.png'

class MediaSidebarComponent extends React.Component {
  render() {
    return (
		<Item.Group divided>
			<Item>
				<Item.Image size='medium' src={image} />
			</Item>
			<Item>
				<Item.Image size='medium' src={image} />
			</Item>
			<Item>
				<Item.Image size='medium' src={image} />
			</Item>
		</Item.Group>
    );
  }
}

export default MediaSidebarComponent;
