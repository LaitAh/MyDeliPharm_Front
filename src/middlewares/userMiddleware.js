import axios from 'axios';
import {
  GET_USER_DATA,
  TOKEN_CHECK,
} from 'src/actions/user';

// Middleware user
const userMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_USER_DATA) {
    axios.get(
      'https://api.mydelipharm.eu/api/secure/user/{id}',
      {
        // TODO : JSON object with user id
      },
    )
      .then((response) => {
        console.log(response.data);
        // For production
        // store.dispatch(saveUserData(response.data));
      })

      .catch((error) => {
        console.log(error);
      });
  }

  // Token check
  const tokenToByCheck = JSON.parse(localStorage.getItem('tokenMyDeliPharm'));
  if (action.type === TOKEN_CHECK) {
    axios.post(
      // TODO URL endpoint API (back)
      'https://api.mydelipharm.eu/api/secure/user/{id}',
      {
        token: tokenToByCheck,
      },
    )
      .then((response) => {
        // If token is OK -> data profil (user_id + profilType)
        // store.dispatch(setProfilType())
      })
      . catch((error) => {
        console.log(error);
      });
  }
  next(action);
};

export default userMiddleware;
