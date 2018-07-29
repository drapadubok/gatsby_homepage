import React from 'react';
import get from 'lodash/get';
import Link from 'gatsby-link';
import { navigateTo } from 'gatsby-link';
import Links from '../Links';
import { Button, Dropdown, Segment, Label, Input, List, Image, Icon, Header, Menu, Sidebar, Divider } from 'semantic-ui-react';
import profilePic from '../../assets/images/photo.jpg';

class SidebarComponent extends React.Component {

  state = { activeItem: '/' }

  handleItemClick = (item ) => {
    navigateTo(item.path)
    this.setState({ activeItem: item.path })
  }

  render() {
    const { location } = this.props;
    const { author, subtitle, menu } = this.props.data.site.siteMetadata;
    const isHomePage = get(location, 'pathname', '/') === '/';
    const { activeItem } = this.state;

    return (
      <div>
        <Segment basic className="sidebar__left__head">
          <Link to="/">
            <Image
              src={profilePic}
              className="sidebar__left__photo"
              alt={author.name}
            />
          </Link>
          <Header as="h2" className="sidebar__left__author">
            <Link to="/">{author.name}</Link>
          </Header>
          <p className="sidebar__left__subtitle">{subtitle}</p>
          <p className="sidebar__left__subtitle">My minimal pitch.</p>
        </Segment>
        <List selection className="sidebar__left__menu">
          {menu.map(item => (
            <List.Item onClick={this.handleItemClick.bind(this, item)}
            key={item.path}
            className={`sidebar__left__menu__link ${item.path === activeItem ? "active" : ""}`}>
              {item.label}
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default SidebarComponent;
