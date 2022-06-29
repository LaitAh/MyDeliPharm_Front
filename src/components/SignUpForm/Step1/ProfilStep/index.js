import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

import { setProfilChoice, handleButtonTabChange } from 'src/actions/signup';

import {
  Header,
  Grid,
  Button,
  Icon,
} from 'semantic-ui-react';
import './styles.scss';

const ProfilStep = ({
  profilName,
  iconName,
  idProfil,
  profilUrl,
  titleProfil,
}) => {
  const dispatch = useDispatch();

  const activeIndex = useSelector((state) => state.signup.activeIndex);

  return (
    <Grid.Column>
      <Header as="h5">{titleProfil}</Header>
      <Button
        className="signin"
        id={idProfil}
        onClick={() => {
          const action = setProfilChoice(profilName, iconName, idProfil, profilUrl);
          dispatch(action);
          dispatch(handleButtonTabChange(activeIndex));
        }}
      >
        <Icon name={iconName} />
        {profilName}
      </Button>
    </Grid.Column>
  );
};

ProfilStep.propTypes = {
  profilName: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  idProfil: PropTypes.string.isRequired,
  profilUrl: PropTypes.string.isRequired,
  titleProfil: PropTypes.string.isRequired,
};

export default ProfilStep;
