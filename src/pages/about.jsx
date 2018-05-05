import React from 'react';
import { Grid, Divider, Container, Header, Segment } from 'semantic-ui-react';


class About extends React.Component {
  render() {
    const { basics, education, languages, skills, work } = this.props.data.dataJson;
    return (
      <Grid container stackable verticalAlign='middle' className="about" style={{ marginTop: '7em' }}>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header className="title" as="h1" floated='left'>
              Why might reading this be interesting to you?
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Divider className="content__main__divider"/>
        <Grid.Row>
          <Grid.Column width={16}>
          In my experience, we usually care to learn something that we can apply to our own lifes to make them better.
          My story is full of curves - had no idea what to do after high school. Studied psychology. Travelled around hometown teaching people to use software tool to search for legal docs. Worked as a game master in gaming company, shadow-managed a team. Moved to Finland to do a PhD in neuroscience, and learned to code. From zero to hero in statistics, machine learning and time series analysis. Taught stats to master level students. Then churned numbers for energy analytics startup. Then data engineered for music education startup. At daytime owning the stack, and responding all the questions, at night learning my way around Elixir.
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
        website
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
