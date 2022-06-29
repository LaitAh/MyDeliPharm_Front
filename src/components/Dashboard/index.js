import { useSelector } from 'react-redux';
import {
  Container,
  Segment,
} from 'semantic-ui-react';
import './styles.scss';
import SmallHeader from './SmallHeader';
import SmallFooter from './SmallFooter';
import DashboardPatient from './DashboardPatient';
import DashboardPharmacist from './DashboardPharmacist';
import DashboardDriver from './DashboardDriver';

const Dashboard = () => {
  const profilType = useSelector((state) => state.user.profilType);

  return (
    <Container basic="true">
      <SmallHeader />
      <Segment as="main" id="dashboard-main" basic>
        {profilType === 'patient' && (
          <>
            <DashboardPatient />
          </>
        )}
        {profilType === 'pharmacist' && (
          <>
            <DashboardPharmacist />
          </>
        )}
        {profilType === 'driver' && (
          <>
            <DashboardDriver />
          </>
        )}
      </Segment>
      <SmallFooter />
    </Container>
  );
};

export default Dashboard;
