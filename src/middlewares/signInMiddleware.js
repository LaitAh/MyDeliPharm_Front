import axios from 'axios';
import {
  SUBMIT_LOGGIN,
  GET_USER_ID_CONNECTED,
  getUserIdConnected,
  login,
  saveUserInfos,
  saveUserInfosWithoutAddress,
  setProfilType,
} from 'src/actions/user';

import jwtDecode from 'jwt-decode';

const signInMiddleware = (store) => (next) => (action) => {
  // Loggin
  if (action.type === SUBMIT_LOGGIN) {
    axios.post(
      'https://api.mydelipharm.eu/api/login_check',
      {
        // Get email and password from stat
        email: store.getState().user.email,
        password: store.getState().user.password,
      },
    )
      .then((response) => {
        // Token save
        const { token } = response.data;
        localStorage.setItem('tokenMyDeliPharm', JSON.stringify(token));
        const decodedToken = jwtDecode(token);
        // console.log(decodedToken);
        // Recovery of the type of profil thanks to the decoding of the token
        if (decodedToken.roles[0] === 'ROLE_PATIENT') {
          const profilType = 'patient';
          store.dispatch(setProfilType(profilType));
        }
        if (decodedToken.roles[0] === 'ROLE_PHARMACIST') {
          const profilType = 'pharmacist';
          store.dispatch(setProfilType(profilType));
        }
        if (decodedToken.roles[0] === 'ROLE_DRIVER') {
          const profilType = 'driver';
          store.dispatch(setProfilType(profilType));
        }
      })
      .finally(() => {
        // If promise is resolve, get USER_ID (GET_USER_ID_CONNECTED)
        store.dispatch(getUserIdConnected());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (action.type === GET_USER_ID_CONNECTED) {
    const tokenToByCheck = JSON.parse(localStorage.getItem('tokenMyDeliPharm'));
    axios.get(
      'https://api.mydelipharm.eu/api/secure/profil',
      { headers: { Authorization: `Bearer ${tokenToByCheck}` } },
    )
      .then((response) => {
        // console.log(response.data);
        store.dispatch(login());
        if (response.data.address[0] === undefined) {
          // console.log('No address registered in the DB for this user');
          store.dispatch(saveUserInfosWithoutAddress(response.data));
        }
        else {
          // console.log('An address exists in the database for this user');
          store.dispatch(saveUserInfos(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  next(action);
};

export default signInMiddleware;
