import {
  Segment,
  Button,
  Icon,
  Popup,
  Menu,
} from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'src/actions/user';

const ProfilButtonsMobile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const profilType = useSelector((state) => state.user.profilType);

  const routeChangeToDashboard = () => {
    const path = '/dashboard';
    navigate(path);
  };

  const routeChangeToHome = () => {
    const path = '/';
    navigate(path);
  };

  return (
    <Segment as="div" id="smallHeader_nav" basic>
      <Button
        icon
        id="smallHeader_nav--profil"
        type="submit"
        basic
        color="violet"
        onClick={routeChangeToDashboard}
      >
        <Icon disabled name="user" />
      </Button>
      <Popup
        content={(
          <Menu as="nav" className="nav-menu" secondary vertical>
            <Menu.Item as={Link} key="dashboard" to="/dashboard" active>
              Mon profil
            </Menu.Item>
            {profilType === 'patient' && (
              <Menu.Item as={Link} key="order" to="/commander">
                Passer une commande
              </Menu.Item>
            )}
            <Menu.Item as={Link} key="modifier-profil" to="/dashboard/modifier-profil">
              Modifier mon compte
            </Menu.Item>
            <Button
              id="smallHeader_nav--logout"
              type="submit"
              basic
              color="violet"
              onClick={() => {
                routeChangeToHome();
                dispatch(logout());
                localStorage.removeItem('tokenMyDeliPharm');
              }}
            >
              Se déconnecter
            </Button>
          </Menu>
        )}
        position="bottom right"
        flowing
        id="smallHeader_nav--popup"
        on="click"
        trigger={(
          <Button
            icon
            className="smallHeader_nav--burger"
            type="submit"
            basic
          >
            <Icon disabled name="bars" />
          </Button>
        )}
      />
    </Segment>
  );
};

export default ProfilButtonsMobile;
