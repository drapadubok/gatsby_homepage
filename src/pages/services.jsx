import React from 'react';
import { Divider, Container, Header, Icon, Card, Segment, Grid, Image, Item, Label } from 'semantic-ui-react';
import image from '../assets/images/image.png'

class Services extends React.Component {
  render() {
    return (
        <Container className="services" style={{ marginTop: '7em' }}>
          <Header as="h1">What can I do for you, you might ask?</Header>
          <Divider className="content__main__divider"/>
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column>
                <article className="services__item">
                  <Icon name="signal" size="huge" />
                  <div className="content">
                    <h3>Sed magna finibus</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  </div>
                </article>
              </Grid.Column>
              <Grid.Column>
              <article className="services__item">
                <Icon name="diamond" size="huge" />
                <div className="content">
                  <h3>Portitor ullamcorper</h3>
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
                    <h3>Sapien veroeros</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  </div>
                </article>
              </Grid.Column>
              <Grid.Column>
                <article className="services__item">
                  <Icon name="rocket" size="huge" />
                  <div className="content">
                    <h3>Quam lorem ipsum</h3>
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
