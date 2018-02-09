import React from 'react';
import get from 'lodash/get';
import Link from 'gatsby-link';
import { navigateTo } from 'gatsby-link';
import Links from '../Links';
import { Button, Dropdown, Segment, Label, Input, List, Image, Icon, Header, Menu, Sidebar, Divider } from 'semantic-ui-react';
import profilePic from '../../pages/photo.jpg';
import './style.scss';

class SidebarComponent extends React.Component {

  state = { activeItem: '/' }

  handleItemClick = (item ) => {
    navigateTo(item.path)
    this.setState({ activeItem: item.path })
  }

  render() {
    const { location, visible } = this.props;
    const { author, subtitle, menu } = this.props.data.site.siteMetadata;
    const isHomePage = get(location, 'pathname', '/') === '/';
    const { activeItem } = this.state;

    return (
      <div>
        <Segment basic>
          <Link to="/">
            <Image
              src={profilePic}
              className="sidebar__left__photo"
              alt={author.name}
            />
          </Link>
          <Header as="h2" className="sidebar__left__header">
            <Link to="/">{author.name}</Link>
          </Header>
          <p className="sidebar__left__subtitle">{subtitle}</p>
        </Segment>
        <List selection className="sidebar__left__menu">
          {menu.map(item => (
            <List.Item onClick={this.handleItemClick.bind(this, item)}
            key={item.path}
            className={`sidebar__left__menu__link ${item.path === activeItem ? "active" : ""}`}>

              <List.Content floated="right">
                <Icon name={item.icon} size="big"/>
              </List.Content>
              {item.label}
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default SidebarComponent;

/*

  <div className="sidebar__left__menu__link">
    <List.Item as={Link} key={item.path} exact to={item.path}>
      <List.Content floated='right'>
        <Icon name={item.icon} />
      </List.Content>
      <List.Content>
        {item.label}
      </List.Content>
    </List.Item>
    <Divider className="sidebar__left__menu__divider"/>
  </div>

  <div>
    <Icon name={item.icon} />
    <List.Item className="sidebar__left__menu__link"
      as={Link} exact key={item.path} to={item.path}>
      <List.Content floated='right'>
        {item.label}
      </List.Content>
    </List.Item>
    <Divider className="sidebar__left__menu__divider"/>
  </div>

<div className="sidebar__left__menu__item">
  <List.Item className="sidebar__left__menu__link"
    as={Link} exact key={item.path} to={item.path}>
    {item.label}
    <List.Content floated='right'>
      <Icon name={item.icon}/>
    </List.Content>
    <Divider className="sidebar__left__menu__divider"/>
  </List.Item>
</div>


<div className="sidebar__left__menu__link">
  <List.Item
    as={Link} exact key={item.path} to={item.path}>
    {item.label}
    <List.Content floated='right'>
      <Icon name={item.icon}/>
    </List.Content>
  </List.Item>
  <Divider className="sidebar__left__menu__divider"/>
</div>
*/
