/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { Image, Segment, Tab } from 'semantic-ui-react';

import { useSelector, useDispatch } from 'react-redux';

import logo from 'src/assets/img/MyDeliPharm-Logo_v01_Black-NoMargin-01.svg';

import { handleTabChange } from '../../actions/signup';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import './styles.scss';

const SignUpForm = () => {
  const dispatch = useDispatch();

  const activeIndex = useSelector((state) => state.signup.activeIndex);
  const profilName = useSelector((state) => state.signup.profilName);
  const profilIcon = useSelector((state) => state.signup.icon);

  const panes = [
    {
      menuItem: 'Etape 1',
      render: () => <Tab.Pane attached={false}><Step1 /></Tab.Pane>,
    },
    {
      menuItem: 'Etape 2',
      render: () => <Tab.Pane attached={false}><Step2 profilIcon={profilIcon} profilName={profilName} /></Tab.Pane>,
    },
    {
      menuItem: 'Etape 3',
      render: () => <Tab.Pane attached={false}><Step3 profilIcon={profilIcon} profilName={profilName} /></Tab.Pane>,
    },
  ];

  return (
    <Segment basic>
      <Segment basic id="signIn_form-imgSegment">
        <Image as={Link} key="accueil" to="/" src={logo} centered alt="My Deli Pharm Logo" id="signIn_form-img" />
      </Segment>
      <Tab
        menu={{ secondary: true, pointing: true }}
        panes={panes}
        id="signup-tab"
        activeIndex={activeIndex}
        onTabChange={(e, data) => {
          const action = handleTabChange(data);
          dispatch(action);
        }}
      />
    </Segment>
  );
};

export default SignUpForm;
