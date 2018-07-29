import React from 'react';
import Helmet from 'react-helmet';
import { Container, Segment, Grid, Sidebar, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

import Links from '../components/Links';
import SidebarComponent from '../components/SidebarComponent';
import 'semantic-ui-css/semantic.min.css';
import '../assets/css/app.css';
import favicon from '../favicon.png';


class Layout extends React.Component {

  state = { visible: false }

  toggleSidebarVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { children } = this.props;
    const { visible } = this.state;
    return (
      <Grid stackable padded columns={2}>
        <Helmet
          link={[
            {
              href: favicon,
              rel: 'icon',
              sizes: '16x16',
              type: 'image/png'
            }
          ]}
        />
        <Grid.Column width={3} className="sidebar__left">
          <SidebarComponent {...this.props} visible={this.state.visible} />
        </Grid.Column>
        <Grid.Column width={13} className="content__main">
          <Button onClick={this.toggleSidebarVisibility} icon><Icon name='content' size="big"/></Button>
          <div style={{ marginTop: '1em' }}>
            {children({...this.props})}
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}
/*

        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            <SidebarComponent {...this.props} />
          </Sidebar>
          <Sidebar.Pusher>
            <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
            <div style={{ marginTop: '7em' }}>
              {children({...this.props})}
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      */
export default Layout;

export const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        subtitle
        copyright
        author {
          name
          email
          twitter
          github
        }
        menu {
          label
          path
          icon
        }
      }
    }
  }
`;
