import React from 'react';
import Helmet from 'react-helmet';
import SidebarComponent from '../components/SidebarComponent';
import TagTemplateDetails from '../components/TagTemplateDetails';
import { Grid } from 'semantic-ui-react';

class TagTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;
    const { tag } = this.props.pathContext;

    return (
      <Grid container stackable verticalAlign='middle'>
        <Helmet title={`All Posts tagget as "${tag}" - ${title}`} />
        <Grid.Row>
          <Grid.Column width={16}>
            <TagTemplateDetails {...this.props} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default TagTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
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
          telegram
          twitter
          github
          rss
          vk
        }
      }
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { tags: { in: [$tag] }, layout: { eq: "post" }, draft: { ne: true } } },
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
