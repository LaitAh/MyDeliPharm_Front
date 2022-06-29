import {
  Menu,
} from 'semantic-ui-react';
// HashLink or NavHashLink to React Router's issue of not scrolling to
// #hash-fragments when using the <Link> component to navigate.
import { HashLink } from 'react-router-hash-link';

const HeaderMenu = () => (
  <>
    <Menu.Item as={HashLink} key="accueil" to="/" active>
      Accueil
    </Menu.Item>
    <Menu.Item as={HashLink} key="nos-pharmacies" to="/#home-pharmacies">
      Nos pharmacies
    </Menu.Item>
    <Menu.Item as={HashLink} key="a-propos" to="/#home-about">
      A propos
    </Menu.Item>
    <Menu.Item as={HashLink} key="contact" to="/#home-contact">
      Contact
    </Menu.Item>
  </>
);

export default HeaderMenu;
