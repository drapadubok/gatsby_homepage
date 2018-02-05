import React from 'react';
import get from 'lodash/get';
import Link from 'gatsby-link';
import Links from '../Links';
import { List, Image, Icon, Header, Menu, Sidebar, Divider } from 'semantic-ui-react';
import profilePic from '../../pages/photo.jpg';
import './style.scss';

class SidebarComponent extends React.Component {
  render() {
    const { location, visible } = this.props;
    const { author, subtitle, menu } = this.props.data.site.siteMetadata;
    const isHomePage = get(location, 'pathname', '/') === '/';

    return (
      <div>
        <Link to="/">
          <Image
            src={profilePic}
            className="sidebar__left__photo"
            alt={author.name}
          />
        </Link>
        <Header as="h2">
          <Link to="/">{author.name}</Link>
        </Header>
        <p className="sidebar__left__subtitle">{subtitle}</p>
        <nav>
          <List selection className="sidebar__left__menu">
            {menu.map(item => (
              <List.Item className="sidebar__left__menu__link"
                as={Link} exact key={item.path} to={item.path}>
                {item.label}
                <List.Content floated='right'>
                  <Icon name={item.icon}/>
                </List.Content>
                <Divider className="sidebar__left__menu__divider"/>
              </List.Item>
            ))}
          </List>
        </nav>
      </div>
    );
  }
}

export default SidebarComponent;
