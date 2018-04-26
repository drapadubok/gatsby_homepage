import React from 'react';
import Helmet from 'react-helmet';
import Post from '../components/Post';
import { Divider, Sidebar, Grid, Segment, Button, Menu, Header } from 'semantic-ui-react';

class IndexRoute extends React.Component {
  render() {
    const items = [];
    const { title, subtitle } = this.props.data.site.siteMetadata;
    const posts = this.props.data.allMarkdownRemark.edges;
    posts.forEach((post) => {
      items.push(<Post data={post} key={post.node.fields.slug} />);
    });
    return (
      <Grid container stackable verticalAlign='middle' className="content__main__padding">
        <Grid.Row>
          <Grid.Column width={16}>
            <Header className="title" as="header" floated='left'>
              <p><strong>Dmitry Smirnov</strong> with thoughts on life and engineering</p>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Divider className="content__main__divider"/>
        <Grid.Row>
          <Grid.Column width={16}>
            {items}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default IndexRoute;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
          icon
        }
        author {
          name
          email
          twitter
          github
        }
      }
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;
