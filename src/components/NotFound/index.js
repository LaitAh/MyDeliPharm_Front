// == Import
import './notFound.scss';

import {
  Button,
  Container,
  Header,
  Icon,
  Image,
} from 'semantic-ui-react';

import HeaderHome from 'src/components/Home/Header';
import Footer from 'src/components/Home/Footer';

import { Link } from 'react-router-dom';
import errorImg from 'src/assets/img/errors/Erreur_1.svg';
// == Composant
const NotFound = () => (
  <Container basic="true" id="not-found">
    <HeaderHome />
    <Header as="h1">Oops! - Erreur 404</Header>
    <Image src={errorImg} alt="Image d'une erreur" size="big" centered id="not-found-image" />
    <Button as={Link} key="home" to="/" id="not-found-button">
      <Icon name="pills" />
      L'accueil c'est par ici !
    </Button>
    <Footer />
  </Container>
);
// == Export
export default NotFound;
