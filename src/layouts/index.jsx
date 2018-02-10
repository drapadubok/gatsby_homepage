import React from 'react';
import Helmet from 'react-helmet';
import '../assets/css/font-awesome.min.css';
import 'semantic-ui-css/semantic.min.css';
import '../assets/css/app.css';
import favicon from '../favicon.png';
import SidebarComponent from '../components/SidebarComponent';
import MediaSidebarComponent from '../components/MediaSidebar';
import Links from '../components/Links';
import { Container, Segment, Grid } from 'semantic-ui-react';
import _ from 'lodash'


class Layout extends React.Component {

  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { children } = this.props;
    return (
        <Grid stackable padded columns={3}>
          <Helmet
            defaultTitle="Dmitry Smirnov - Data and Shit"
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
          <Grid.Column width={10} className="content__main">
            {children({...this.props})}
          </Grid.Column>
          <Grid.Column width={3} className="sidebar__right">
            <MediaSidebarComponent {...this.props} visible={this.state.visible} />
          </Grid.Column>
        </Grid>
    );
  }
}

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
