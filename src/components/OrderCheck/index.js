import { useState } from 'react';

import { Grid, Segment } from 'semantic-ui-react';
import DashMain from './DashMain';
import DashProfile from './DashProfile';
import DashOrder from './DashOrder';

const OrderCheck = () => {
  const [checked, setChecked] = useState(
    {
      cv: false,
      mutual: false,
      prescription: false,
    },
  );

  return (
    <Segment basic>
      <Grid container stackable>
        <Grid.Column width={16}>
          <DashOrder checked={checked} />
        </Grid.Column>
        <Grid.Row>
          <Grid.Column width={5}>
            <DashProfile />
          </Grid.Column>
          <Grid.Column width={11}>
            <DashMain checked={checked} setChecked={setChecked} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default OrderCheck;
