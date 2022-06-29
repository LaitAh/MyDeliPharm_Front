import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  Button,
  Form,
  Segment,
  Icon,
} from 'semantic-ui-react';
import { updateSignUpField } from 'src/actions/user';
import { createNewUser } from 'src/actions/signup';
import './styles.scss';

const Step3 = ({ profilIcon, profilName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const idProfil = useSelector((state) => state.signup.idProfil);

  const routeChangeToSignIn = () => {
    const path = '/connexion';
    navigate(path);
  };

  return (
    <div className="step3">
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
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(createNewUser());
          // After sign up his account, the user is redirected to the login page
          routeChangeToSignIn();
        }}
      >
        <Form.Input
          id="signUp_form--email"
          label="E-mail"
          placeholder="Entrer votre E-mail"
          type="email"
          name="email"
          value={email}
          onChange={(event) => {
            const name = 'email';
            const { value: newValue } = event.target;
            const action = updateSignUpField(newValue, name);
            dispatch(action);
          }}
        />
        <Form.Input
          id="signUp_form--password"
          label="Mot de passe"
          placeholder="Entrer votre mot de passe"
          type="password"
          name="password"
          value={password}
          onChange={(event) => {
            const name = 'password';
            const { value: newValue } = event.target;
            const action = updateSignUpField(newValue, name);
            dispatch(action);
          }}
        />
        <Button id="signUp_form--button" fluid>Valider l'inscription</Button>
      </Form>
    </div>
  );
};

Step3.propTypes = {
  profilIcon: PropTypes.string.isRequired,
  profilName: PropTypes.string.isRequired,
};

export default Step3;
