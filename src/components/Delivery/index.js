import { Button, Grid, Segment } from 'semantic-ui-react';

import Itinerary from './Itinerary';
import DeliveryMap from './DeliveryMap';

const Delivery = () => {
  console.log();

  return (
    <Segment basic>
      <Grid container stackable>

        <Grid.Column width={16}>
          <Grid.Row>
            <Itinerary />
          </Grid.Row>

          <Grid.Row>
            <DeliveryMap />
          </Grid.Row>

          <Grid.Row>
            <Button fluid color="violet">
              Confirmer la livraison
            </Button>
          </Grid.Row>
        </Grid.Column>

      </Grid>
    </Segment>
  );
};

export default Delivery;
