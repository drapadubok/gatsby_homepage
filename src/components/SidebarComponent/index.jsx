import React from 'react';
import get from 'lodash/get';
import Link from 'gatsby-link';
import SidebarMenu from '../SidebarMenu';
import Links from '../Links';
import { Image, Icon, Header, Menu, Sidebar } from 'semantic-ui-react';
import profilePic from '../../pages/photo.jpg';
import './style.scss';

class SidebarComponent extends React.Component {
  render() {
    const { location, visible } = this.props;
    const { author, subtitle, copyright, menu } = this.props.data.site.siteMetadata;
    const isHomePage = get(location, 'pathname', '/') === '/';

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        <Link to="/">
          <Image
            src={profilePic}
            className="sidebar__author-photo"
            alt={author.name}
          />
        </Link>
        <h2 className="sidebar__author-title">
          <Link className="sidebar__author-title-link" to="/">{author.name}</Link>
        </h2>
        <p className="sidebar__author-subtitle">{subtitle}</p>
      </div>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <Sidebar as={Menu} animation='overlay' width='wide' visible={visible} vertical>
        <div className="sidebar">
          <div className="sidebar__inner">
            <div className="sidebar__author">
              {authorBlock}
            </div>
            <div>
              <SidebarMenu data={menu} />
              <Links data={author} />
              <p className="sidebar__copyright">
                {copyright}
              </p>
            </div>
          </div>
        </div>
      </Sidebar>
    );
  }
}

export default SidebarComponent;
