/* eslint-disable max-len */
import {
  Segment,
  Grid,
  Image,
  Header,
  List,
  Container,
} from 'semantic-ui-react';

import aboutImg from 'src/assets/img/AboutImg.svg';

import './styles.scss';

const About = () => (
  <Segment basic as="section" className="about" id="home-about">
    <Header as="h2" id="about-title">A propos</Header>
    <Grid stackable container columns={2}>
      <Grid.Column as={Container} text className="about-column" id="about-leftColumn" width={10}>
        <p className="about-chapter" id="firstChapter">
          L’équipe MyDeliPharm est soucieuse d’apporter un service de qualité aux patients et professionnels de santé dans la livraison des produits de santé.
        </p>
        <Header as="h4" id="h4-about">L’équipe MyDeliPharm&#8239;:</Header>
        <List as="div" className="about-chapter">
          <List.Item as="p">Côté Front&#8239;: Léa, Niou, Guillaume</List.Item>
          <List.Item as="p">Côté Back&#8239;: Jonas, Joris</List.Item>
        </List>
      </Grid.Column>
      <Grid.Column className="about-column" id="about-rightColumn" width={6}>
        <Image src={aboutImg} size="medium" centered />
      </Grid.Column>
    </Grid>
  </Segment>
);

export default About;
