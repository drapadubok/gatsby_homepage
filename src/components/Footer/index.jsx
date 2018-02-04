import React from 'react';
import Link from 'gatsby-link';
import Links from '../Links';
import { Image, Icon, Header, Menu, Sidebar } from 'semantic-ui-react';

class Footer extends React.Component {
  render() {
    const { author, copyright } = this.props.data.site.siteMetadata;

    return (
      <div>
        <Links data={author} />
        <p>{copyright}</p>
      </div>
    );

  }
}

export default Footer;
