import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  Button,
  Form,
  Icon,
  Segment,
} from 'semantic-ui-react';

import { handleButtonTabChange } from 'src/actions/signup';
import { updateSignUpField } from 'src/actions/user';
import './styles.scss';

const Step2 = ({
  profilIcon,
  profilName,
}) => {
  const dispatch = useDispatch();

  const activeIndex = useSelector((state) => state.signup.activeIndex);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const idProfil = useSelector((state) => state.signup.idProfil);

  return (
    <div className="step2">
      <Segment
        as="div"
        className="signin-selectedProfil"
        id={idProfil}
      >
        <Icon name={profilIcon} />
        {profilName}
      </Segment>
      <Form
        action=""
        id="signUp_form"
      >
        <Form.Input
          id="signUp_form--firstName"
          label="Prénom"
          placeholder="Entrer votre prénom"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(event) => {
            const name = 'firstName';
            const { value: newValue } = event.target;
            const action = updateSignUpField(newValue, name);
            dispatch(action);
          }}
        />
        <Form.Input
          id="signUp_form--lastName"
          label="Nom"
          placeholder="Entrer votre nom"
          type="text"
          name="lastname"
          value={lastName}
          onChange={(event) => {
            const name = 'lastName';
            const { value: newValue } = event.target;
            const action = updateSignUpField(newValue, name);
            dispatch(action);
          }}
        />
        <Button
          as="a"
          id="signUp_form--button"
          fluid
          onClick={() => {
            const action = handleButtonTabChange(activeIndex);
            dispatch(action);
          }}
        >
          Continuer
        </Button>
      </Form>
    </div>
  );
};

Step2.propTypes = {
  profilIcon: PropTypes.string.isRequired,
  profilName: PropTypes.string.isRequired,
};

export default Step2;
