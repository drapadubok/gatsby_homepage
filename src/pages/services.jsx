import React from 'react';
import { Divider, Container, Header, Icon, Card, Segment, Grid, Image, Item, Label } from 'semantic-ui-react';
import image from '../assets/images/image.png'

class Services extends React.Component {
  render() {
    return (
        <Container className="services">
          <Header as="h1">What can I do for you, you might ask?</Header>
          <Divider className="content__main__divider"/>
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column>
                <article className="services__item">
                  <Icon name="signal" size="huge" />
                  <div className="content">
                    <h3>Data analytics, dashboards, reporting</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  </div>
                </article>
              </Grid.Column>
              <Grid.Column>
              <article className="services__item">
                <Icon name="diamond" size="huge" />
                <div className="content">
                  <h3>Web development</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
              </article>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <article className="services__item">
                  <Icon name="plane" size="huge" />
                  <div className="content">
                    <h3>Software development and DevOps</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  </div>
                </article>
              </Grid.Column>
              <Grid.Column>
                <article className="services__item">
                  <Icon name="rocket" size="huge" />
                  <div className="content">
                    <h3>Big Data infra</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  </div>
                </article>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

    );
  }
}

export default Services;
