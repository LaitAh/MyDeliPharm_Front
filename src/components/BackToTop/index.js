import './styles.scss';

import {
  Button,
} from 'semantic-ui-react';

import { HashLink } from 'react-router-hash-link';

// == Composant
const BackToTop = () => (
  <Button
    id="backToTop"
    icon="angle up"
    as={HashLink}
    key="backtotop"
    to="/#header"
  />
);
// == Export
export default BackToTop;
