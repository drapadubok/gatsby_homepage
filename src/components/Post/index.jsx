import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';
import { Divider, Container, Header, Segment, List } from 'semantic-ui-react';

class Post extends React.Component {
  render() {
    const { title, date, category, description } = this.props.data.node.frontmatter;
    const { slug, categorySlug } = this.props.data.node.fields;

    return (
      <Segment>
        <div>
          <time dateTime={moment(date).format('MMMM D, YYYY')}>
            {moment(date).format('MMMM YYYY')}
          </time>
          <p key={categorySlug}>
            <Link to={categorySlug}>
              {category}
            </Link>
          </p>
        </div>
        <h2>
          <Link to={slug}>{title}</Link>
        </h2>
        <p>{description}</p>
      </Segment>
    );
  }
}

export default Post;
