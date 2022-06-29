/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Menu,
  Button,
  Segment,
  Image,
  Popup,
  Icon,
} from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

import './styles.scss';
import logo from 'src/assets/img/MyDeliPharm-Logo_v01_Black-NoMargin-01.svg';
import SignInForm from '../../SignInForm';
import HeaderMenu from './HeaderMenu';
import ProfilButtonsDesktop from '../../Dashboard/SmallHeader/ProfilButtons/profilButtonsDesktop';
import ProfilButtonsMobile from '../../Dashboard/SmallHeader/ProfilButtons/profilButtonsMobile';

const HeaderHome = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches,
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  // In media mobile, click on the connect button will redirect to the connection page,
  // In media desktop, a connection popup will appear
  const navigate = useNavigate();
  const routeChangeToConnection = () => {
    const path = '/connexion';
    navigate(path);
  };

  const isLogged = useSelector((state) => state.user.isLogged);

  return (
    <Segment as="header" id="header">
      {matches && (
      <Segment as="div" id="div-menu" basic>
        <Image className="logo" src={logo} alt="My Deli Pharm logo" id="menu-image" />
        <Menu as="nav" className="nav-menu" id="nav-buttons" secondary>
          <HeaderMenu />
          {!isLogged && (
            <Popup
              content={<SignInForm />}
              position="bottom right"
              flowing
              on="click"
              trigger={(
                <Button
                  className="nav_login-button"
                  type="submit"
                  basic
                  color="violet"
                >
                  Connexion
                </Button>
              )}
            />
          )}
          {isLogged && (
            <ProfilButtonsDesktop id="nav_logout-button" />
          )}
        </Menu>
      </Segment>
      )}

      {!matches && (
        <Segment as="div" id="div-menu" basic>
          <Image className="logo" src={logo} alt="My Deli Pharm logo" id="menu-image" />
            {!isLogged && (
              <Segment as="div" id="nav-buttons" basic>
                <Popup
                  content={(
                    <Menu as="nav" className="nav-menu" secondary vertical>
                      <HeaderMenu />
                    </Menu>
                  )}
                  position="bottom right"
                  flowing
                  id="nav_menu-popup"
                  on="click"
                  trigger={(
                    <Segment as="div" id="nav_logout-button" basic>
                      <Button
                        icon
                        id="nav_login-button"
                        type="submit"
                        basic
                        color="violet"
                        onClick={routeChangeToConnection}
                      >
                        <Icon disabled name="user" />
                      </Button>
                      <Popup
                        content={(
                          <Menu as="nav" className="nav-menu" secondary vertical>
                            <HeaderMenu />
                          </Menu>
                        )}
                        position="bottom right"
                        flowing
                        id="nav_menu-popup"
                        on="click"
                        trigger={(
                          <Button
                            icon
                            className="nav_menu-burger"
                            type="submit"
                            basic
                          >
                            <Icon disabled name="bars" />
                          </Button>
                        )}
                      />
                    </Segment>
                  )}
                />
              </Segment>
            )}

            {isLogged && (
              <ProfilButtonsMobile />
            )}

        </Segment>
      )}
    </Segment>
  );
};

export default HeaderHome;
