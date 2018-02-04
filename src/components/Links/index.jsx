import React from 'react';
import { Image, List, Icon } from 'semantic-ui-react';
import './style.scss';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      twitter: author.twitter,
      github: author.github,
      email: author.email
    };

    return (
      <List horizontal>
        <List.Item>
          <a href={`https://www.twitter.com/${links.twitter}`} target="_blank" >
            <Icon name="twitter" />
          </a>
        </List.Item>
        <List.Item>
          <a href={`https://www.github.com/${links.github}`} target="_blank" >
            <Icon name="github" />
          </a>
        </List.Item>
        <List.Item>
          <a href={`mailto:${links.email}`}>
            <Icon name="mail" />
          </a>
        </List.Item>
      </List>
    );
  }
}

export default Links;
