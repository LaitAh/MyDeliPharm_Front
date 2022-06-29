import PropTypes from 'prop-types';
import './styles.scss';
import {
  Card,
  Image,
  Icon,
  Button,
  List,
} from 'semantic-ui-react';

import { useDispatch } from 'react-redux';

import { setProfilChoice, handleHomeIndexChange } from 'src/actions/signup';

import { Link } from 'react-router-dom';

const Profile = ({
  profilName,
  profilImg,
  description,
  iconName,
  idProfil,
  profilUrl,
}) => {
  const dispatch = useDispatch();

  return (
    <Card className={`profil profil__card profil__card--${profilName}`}>
      <Image src={profilImg} centered alt="image1" className="profil__image" size="medium" />
      <Card.Description className="profil__description">
        <span id="description-list-title">Je souhaite&#8239;:</span>
        <List id="list-description" bulleted>
          {description.map((item) => (
            <List.Item as="p" key={item}>{item}</List.Item>
          ))}
        </List>
      </Card.Description>
      <Card.Content className="profil__content">
        <Button
          as={Link}
          to="/inscription"
          className="signin"
          onClick={() => {
            const action = setProfilChoice(profilName, iconName, idProfil, profilUrl);
            dispatch(action);
            // Link to step 2 of the signup form
            dispatch(handleHomeIndexChange());
          }}
        >
          <Icon name={iconName} />
          {profilName}
        </Button>
      </Card.Content>
    </Card>
  );
};

Profile.propTypes = {
  profilName: PropTypes.string.isRequired,
  profilImg: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  iconName: PropTypes.string.isRequired,
  idProfil: PropTypes.string.isRequired,
  profilUrl: PropTypes.string.isRequired,
};

export default Profile;
