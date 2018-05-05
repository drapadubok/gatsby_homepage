import React from 'react';
import Helmet from 'react-helmet';
import { Container, Segment, Grid } from 'semantic-ui-react';

import Links from '../components/Links';
import SidebarComponent from '../components/SidebarComponent';
import 'semantic-ui-css/semantic.min.css';
import '../assets/css/app.css';
import favicon from '../favicon.png';

class Layout extends React.Component {

  state = {}

  render() {
    const { children } = this.props;
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
            {children({...this.props})}
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
/*
<Grid.Column width={3} className="sidebar__right">
  <MediaSidebarComponent {...this.props} visible={this.state.visible} />
</Grid.Column>
*/
