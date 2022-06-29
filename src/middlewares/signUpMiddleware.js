import axios from 'axios';
import {
  CREATE_NEW_USER,
} from '../actions/signup';

const signUpMiddleware = (store) => (next) => (action) => {
  if (action.type === CREATE_NEW_USER) {
    axios.post(
      // URL
      `https://api.mydelipharm.eu/api/user/${store.getState().signup.profilUrl}`,
      // Données
      {
        user: {
          email: store.getState().user.email,
          firstname: store.getState().user.firstName,
          lastname: store.getState().user.lastName,
          phoneNumber: '',
          isAdmin: false,
          password: store.getState().user.password,
        },
      },
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // on passe l'action au suivant
  next(action);
};

export default signUpMiddleware;
