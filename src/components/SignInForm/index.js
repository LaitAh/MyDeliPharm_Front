import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Item,
} from 'semantic-ui-react';

import { updateSignInField, submitLoggin } from '../../actions/user';
import logo from '../../assets/img/MyDeliPharm-Logo_v01_Black-NoMargin-01.svg';

import './styles.scss';

const SignInForm = () => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  return (
    <Segment id="signIn_form" basic>
      <Header as="h3" textAlign="center" id="signIn_form-title">
        <Image as={Link} key="accueil" to="/" src={logo} centered alt="My Deli Pharm Logo" id="signIn_form-img" />
        Connexion
      </Header>
      <Form
        action=""
        id="signIn_form--form"
        onSubmit={(event) => {
          event.preventDefault();
          console.log('Ajout d\'un nouvel utilisateur');
          dispatch(submitLoggin());
        }}
      >
        <Form.Input
          id="signIn_form--email"
          label="E-mail"
          placeholder="Entrer votre E-mail"
          type="email"
          name="email"
          value={email}
          onChange={(event) => {
            const name = 'email';
            const { value: newValue } = event.target;
            const action = updateSignInField(newValue, name);
            dispatch(action);
          }}
        />
        <Form.Input
          id="signIn_form--password"
          label="Mot de passe"
          placeholder="Entrer votre mot de passe"
          type="password"
          name="password"
          value={password}
          onChange={(event) => {
            const name = 'password';
            const { value: newValue } = event.target;
            const action = updateSignInField(newValue, name);
            dispatch(action);
          }}
        />
        <Button
          id="signIn_form--button"
          fluid
        >
          Se connecter
        </Button>
      </Form>
      <Grid columns={2} stackable id="signIn_form--links">
        <Grid.Column id="signIn_form--signUp">
          <Item as={Link} key="inscription" to="/inscription" id="signIn_form--signUpLink">Créer un compte</Item>
        </Grid.Column>
        <Grid.Column id="signIn_form--forgotPassword">
          <Item as={Link} key="reset-password" to="#" id="signIn_form--forgotPasswordLink">Mot de passe oublié</Item>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default SignInForm;
