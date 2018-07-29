import React from 'react';
import { Divider, Card, Container, Header, Segment, List } from 'semantic-ui-react';


class About extends React.Component {
  render() {
    console.log(this.props)
    const { basics, education, languages, skills, work } = this.props.data.dataJson;

    return (
      <Container>
        <Segment.Group>
          <Segment>
            <Header as="h1">Who am I?</Header>
            <Divider className="content__main__divider"/>
          </Segment>
          <Segment>
            My story is full of curves - I had no idea what to do after high school, so I went to study psychology.
            There was no job after university, so I travelled around hometown teaching people to use searching software for legal docs.
            Worked as a game master in gaming company, shadow-managed a team.
            Moved to Finland to do a PhD in neuroscience, and learned to code.
            From zero to hero in statistics, machine learning and time series analysis.
            Taught stats to master level students.
            Then churned numbers for energy analytics startup.
            Then data engineered for music education startup.
            At daytime owning the stack, and getting problems solved, at night learning my way around fancy tech.
          </Segment>
          <Segment >
            <Card fluid color='yellow'>
              <Card.Content>
                <Card.Header as="h4">{basics.label} @ Yousician</Card.Header>
                <Card.Description>
                  Following idea of <a href="https://www.kalzumeus.com/standing-invitation/" target="_blank">Patrick Mckenzie</a> my story might leave you with some questions, or maybe you just want to talk about business, software or career transitions?
                  I love helping people figure things out, and here there is no exception, so here is a standing invitation:
                  here is my twitter, here is my twitter. I prefer email, so please take that in consideration.
                </Card.Description>
              </Card.Content>
            </Card>
          </Segment>
          <Segment color='olive'>
            <List.Header as="h3">How do you reach me?</List.Header>
            <p>{basics.email}</p>
          </Segment>
          <Segment color='green'>
            <List.Header as="h3">Education</List.Header>
            <Card.Group>
              {education.map(item => (
                <Card fluid key={item.name}>
                  <Card.Content>
                    <Card.Header as="h4">{item.institution}</Card.Header>
                    <Card.Meta>{item.startDate} to {item.endDate}</Card.Meta>
                    <Card.Description>
                      <p>{item.area}, {item.studyType}</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Segment>
          <Segment color='teal'>
            <List.Header as="h3">Professional Experience</List.Header>
            <List divided relaxed>
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
              ))},
            </List>
          </Segment>
          <Segment color='blue'>Blue</Segment>
          <Segment color='violet'>Violet</Segment>
          <Segment color='purple'>Purple</Segment>
          <Segment color='pink'>Pink</Segment>
          <Segment color='brown'>Brown</Segment>
          <Segment color='grey'>Grey</Segment>
          <Segment color='black'>Black</Segment>
        </Segment.Group>
      </Container>
    );
  }
}

export default About;
export const pageQuery = graphql`
  query AboutQuery {
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
