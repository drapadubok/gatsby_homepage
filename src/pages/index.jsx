import React from 'react';
import Helmet from 'react-helmet';
import Post from '../components/Post';
import { Container, Divider, Sidebar, Grid, Segment, Button, Menu, Header } from 'semantic-ui-react';

class IndexRoute extends React.Component {
  render() {
    const items = [];
    const { title, subtitle } = this.props.data.site.siteMetadata;
    const posts = this.props.data.allMarkdownRemark.edges;
    posts.forEach((post) => {
      items.push(<Post data={post} key={post.node.fields.slug} />);
    });
    return (
      <Container style={{ marginTop: '7em' }}>
        <Header className="title" as="h1">
          My thoughts on life, stuff and engineering
        </Header>
        <Divider className="content__main__divider"/>
        {items}
      </Container>
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
