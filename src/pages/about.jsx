import React from 'react';
import { Divider, Container, Header, Segment, List } from 'semantic-ui-react';


class About extends React.Component {
  render() {
    const { basics, education, languages, skills, work } = this.props.data.dataJson;
    console.log(work)
    return (
      <Container className="about" style={{ marginTop: '7em' }}>
        <Header className="title" as="h1">
          Why might reading this be interesting to you?
        </Header>
        <Divider className="content__main__divider"/>
        In my experience, we usually care to learn something that we can apply to our own lifes to make them better.
        My story is full of curves - had no idea what to do after high school. Studied psychology. Travelled around hometown teaching people to use software tool to search for legal docs. Worked as a game master in gaming company, shadow-managed a team. Moved to Finland to do a PhD in neuroscience, and learned to code. From zero to hero in statistics, machine learning and time series analysis. Taught stats to master level students. Then churned numbers for energy analytics startup. Then data engineered for music education startup. At daytime owning the stack, and responding all the questions, at night learning my way around Elixir.        
        <Header as="h2">CV stuff</Header>
        <Divider className="content__main__divider"/>
        <List>
          <List.Item>
            <p>{basics.name}</p>
            <p>{basics.label}</p>
            <p>{basics.email}</p>
            <p>{basics.phone}</p>
          </List.Item>
          {work.map(item => (
            <List.Item key={item.name}>
              <p>{item.name}</p>
              <p>{item.description}</p>
              <p>{item.location}</p>
              <p>{item.description}</p>
              <p>{item.position}</p>
              <p>{item.url}</p>
              <p>{item.startDate}</p>
              <p>{item.endDate}</p>
              <p>{item.summary}</p>
              <p>{item.highlights}</p>
            </List.Item>
          ))}
        </List>
        <List>
          {education.map(item => (
            <List.Item key={item.name}>
              <p>{item.institution}</p>
              <p>{item.area}</p>
              <p>{item.studyType}</p>
              <p>{item.startDate}</p>
              <p>{item.endDate}</p>
            </List.Item>
          ))}
        </List>
      </Container>
    );
  }
}

export default About;

export const pageQuery = graphql`
  query CV {
    dataJson {
      basics {
        name
        label
        email
        phone
      }
      work {
        name
        location
        description
        position
        url
        startDate
        endDate
        summary
        highlights
      }
      education {
        institution
        area
        studyType
        startDate
        endDate
      }
     	languages {
        name
        level
      }
      skills {
        name
        keywords
      }
    }
  }
`;
