import React from 'react';
import Link from 'gatsby-link';
import { Menu, Image, Icon, Header } from 'semantic-ui-react';
import './style.scss';

class SidebarMenu extends React.Component {
  render() {
    const menu = this.props.data;

    const menuBlock = (
      <ul>
        {menu.map(item => (
          <li key={item.path}>
            <Link
              exact
              to={item.path}
              className=""
              activeClassName=""
            >
              <Menu.Item name={item.label}>
                <Icon name={item.icon} />
                {item.label}
              </Menu.Item>
            </Link>
          </li>
        ))}
      </ul>
    );

    return (
      <nav>
        {menuBlock}
      </nav>
    );
  }
}

export default SidebarMenu;
