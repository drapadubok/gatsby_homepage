import React from 'react';
import { Container, Header, Icon, Card, Segment, Grid, Image, Item, Label } from 'semantic-ui-react';
import image from '../assets/images/image.png'

class Services extends React.Component {
  render() {
    return (
      <Segment basic className="services">
        <Container>
          <Header>
            <h2>What we do</h2>
            <p>lorem.</p>
          </Header>
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Item className="services__item">
                  <Icon size="huge" circular name="settings" />
                  <Item.Content>
                    <Item.Header as='a'>12 Years a Slave</Item.Header>
                    <Item.Meta>
                      <span className='cinema'>Union Square 14</span>
                    </Item.Meta>
                    <Item.Description>meh</Item.Description>
                    <Item.Extra>
                      <Label>IMAX</Label>
                      <Label icon='globe' content='Additional Languages' />
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Grid.Column>
              <Grid.Column>
                <Item>
                  <Icon size="huge" circular name="settings" />
                  <Item.Content>
                    <Item.Header as='a'>12 Years a Slave</Item.Header>
                    <Item.Meta>
                      <span className='cinema'>Union Square 14</span>
                    </Item.Meta>
                    <Item.Description>meh</Item.Description>
                    <Item.Extra>
                      <Label>IMAX</Label>
                      <Label icon='globe' content='Additional Languages' />
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image src={image} />
              </Grid.Column>
              <Grid.Column>
                <Image src={image} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Services;
