import React from 'react';
import Helmet from 'react-helmet';
import '../assets/css/font-awesome.min.css';
import 'semantic-ui-css/semantic.min.css';
import '../assets/css/app.css';
import SidebarComponent from '../components/SidebarComponent';
import { Sidebar, Segment, Button, Grid } from 'semantic-ui-react';

class Layout extends React.Component {

  state = { visible: true }
  toggleVisibility() {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { children } = this.props;
    return (
      <Sidebar.Pushable as={Segment}>
        <Helmet defaultTitle="Dmitry Smirnov - Data and Shit" />
        <SidebarComponent {...this.props} visible={this.state.visible} />
        <Sidebar.Pusher>
          <Segment basic>
            {children({...this.props, toggleVisibility: this.toggleVisibility.bind(this)})}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default Layout;
