import { Grid } from 'semantic-ui-react';
import DashMain from './DashMain';
import DashProfile from './DashProfile';

const DashboardPharmacist = () => (

  <Grid stackable>

    <Grid.Row>
      <Grid.Column width={5}>
        <DashProfile />
      </Grid.Column>

      <Grid.Column width={11}>
        <DashMain />
      </Grid.Column>
    </Grid.Row>

  </Grid>
);

export default DashboardPharmacist;
