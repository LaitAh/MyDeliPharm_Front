import { useState, useEffect } from 'react';
import {
  Segment,
  Image,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from 'src/assets/img/MyDeliPharm-Logo_v01_Black-NoMargin-01.svg';
import './styles.scss';
import ProfilButtonsMobile from './ProfilButtons/profilButtonsMobile';
import ProfilButtonsDesktop from './ProfilButtons/profilButtonsDesktop';

const SmallHeader = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches,
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return (
    <Segment as="header" id="smallHeader">
      <Segment as="div" id="smallHeader-menu" basic>
        <Segment as="div" id="smallHeader-logoDiv" basic>
          <Image as={Link} key="accueil" to="/" src={logo} alt="My Deli Pharm Logo" id="smallHeader-logo" />
        </Segment>
        {matches && (
          <ProfilButtonsDesktop />
        )}
        {!matches && (
          <ProfilButtonsMobile />
        )}
      </Segment>
    </Segment>
  );
};

export default SmallHeader;
