import { Segment, Grid, List } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import SocialNetBar from './SocialNetBar';

import './styles.scss';

const Footer = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches,
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return (
    <Segment as="footer" id="footer">
      <Grid stackable container columns={3}>
        <Grid.Column className="footer-column">
          {!matches && <SocialNetBar />}
          <List className="footer-list footer-list--1">
            <List.Item href="/">Mentions légales</List.Item>
            <List.Item href="/">A propos</List.Item>
            <List.Item href="/">CGV</List.Item>
          </List>
          {matches && <SocialNetBar />}
        </Grid.Column>
        <Grid.Column className="footer-column">
          <List className="footer-list footer-list--2">
            <List.Item as={Link} to="/inscription">S'inscrire </List.Item>
            <List.Item as={Link} to="/connexion">Se connecter</List.Item>
            <List.Item as={Link} to="/commander">Commander</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column className="footer-column">
          <List className="footer-list footer-list--3">
            <List.Item href="/">Nous rejoindre</List.Item>
            <List.Item href="/">Nous contacter</List.Item>
            <List.Item href="/">FAQ</List.Item>
          </List>
        </Grid.Column>
      </Grid>
      <h3 className="footer-h3">2022 - MyDeliPharm<sup>&#169;</sup></h3>
    </Segment>
  );
};
export default Footer;
