// == Import : npm
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { getUserIdConnected, login, setProfilType } from 'src/actions/user';

import jwtDecode from 'jwt-decode';

// == Import : local
// Composants
import App from 'src/components/App';
import store from 'src/store';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)

const token = JSON.parse(localStorage.getItem('tokenMyDeliPharm'));
if (token) {
  const decodedToken = jwtDecode(token);

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
  store.dispatch(login());
  store.dispatch(getUserIdConnected());
}

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
