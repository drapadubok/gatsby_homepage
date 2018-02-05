import React from 'react';
import Helmet from 'react-helmet';
import '../assets/css/font-awesome.min.css';
import 'semantic-ui-css/semantic.min.css';
import '../assets/css/app.css';
import favicon from '../favicon.png';
import SidebarComponent from '../components/SidebarComponent';
import MediaSidebarComponent from '../components/MediaSidebar';
import Footer from '../components/Footer';
import Links from '../components/Links';
import { Sticky, Container, Sidebar, Segment, Button, Grid, Menu } from 'semantic-ui-react';
import _ from 'lodash'


class Layout extends React.Component {

  state = {}
  
  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { children } = this.props;
    const { contextRef } = this.state;
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
            <Sticky context={contextRef}>
              <SidebarComponent {...this.props} visible={this.state.visible} />
            </Sticky>
          </Grid.Column>
          <Grid.Column width={10} className="content__main">
            <div ref={this.handleContextRef}>
              <Segment basic>
                <Container>
                  {children({...this.props})}
                </Container>
              </Segment>
            </div>
          </Grid.Column>
          <Grid.Column width={3} className="sidebar__right">
            <Sticky context={contextRef}>
              <MediaSidebarComponent {...this.props} visible={this.state.visible} />
            </Sticky>
          </Grid.Column>
          {/*
          <Grid.Row>
            <Grid.Column width={16}>
              <Segment>
                <Footer {...this.props} />
              </Segment>
            </Grid.Column>
          </Grid.Row>
          */}
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
