import React from 'react';
import Helmet from 'react-helmet';
import '../assets/css/font-awesome.min.css';
import 'semantic-ui-css/semantic.min.css';
import '../assets/css/app.css';
import SidebarComponent from '../components/SidebarComponent';
import MediaSidebarComponent from '../components/MediaSidebar';
import Footer from '../components/Footer';
import Links from '../components/Links';
import { Container, Sidebar, Segment, Button, Grid, Menu } from 'semantic-ui-react';

class Layout extends React.Component {

  state = { visible: true }
  toggleVisibility() {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { children } = this.props;
    return (
        <Grid stackable padded>
          <Helmet defaultTitle="Dmitry Smirnov - Data and Shit" />
          <Grid.Column width={3} className="sidebar__left">
            <SidebarComponent {...this.props} visible={this.state.visible} />
          </Grid.Column>
          <Grid.Column width={10} className="content__main">
            {/*<Container>
              <Button icon="bars" onClick={this.toggleVisibility.bind(this)}></Button>
            </Container>*/}
            <Segment basic>
              <Container>
                {children({...this.props})}
              </Container>
            </Segment>
          </Grid.Column>
          <Grid.Column width={3} className="sidebar__right">
            <MediaSidebarComponent {...this.props} visible={this.state.visible} />
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
