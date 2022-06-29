// == Import
import './styles.scss';

import { Container, Segment } from 'semantic-ui-react';

import BackToTop from 'src/components/BackToTop';

import HeaderHome from './Header';
import Banner from './Banner';
import Profiles from './Profiles';
import Pharmacies from './Pharmacies';
import Contact from './Contact';
import Footer from './Footer';
import About from './About';

const Home = () => (
  <Container basic="true">
    <HeaderHome />
    <Segment as="main">
      <Banner />
      <Profiles />
      <Pharmacies />
      <About />
      <Contact />
    </Segment>
    <Footer />
    <BackToTop />
  </Container>
);

export default Home;
