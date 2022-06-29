import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  Grid,
  Header,
} from 'semantic-ui-react';
import { updateDriverInfos } from 'src/actions/user';
import './styles.scss';

const UpdateDriverInfos = () => {
  const dispatch = useDispatch();

  const location = useSelector((state) => state.user.driverInfos.location);
  const vehicule = useSelector((state) => state.user.driverInfos.vehicule);

  return (
    <Grid.Row id="updateDriverField">
      <Grid stackable columns={2} container>
        <Header as="h3">Information du livreur</Header>
        <Grid stackable container>
          <Grid.Column width={8} id="updateDriverField-location">
            <Form.Field
              control="input"
              type="text"
              label="Location"
              placeholder="00000000000"
              name="location"
              value={location}
              onChange={(event) => {
                const { value: newValue } = event.target;
                const action = updateDriverInfos(newValue, 'location');
                dispatch(action);
              }}
            />
          </Grid.Column>
          <Grid.Column width={8} id="updateDriverField-vehicule">
            <Form.Field
              control="input"
              type="text"
              label="Type de véhicule"
              placeholder="TODO"
              name="vehicule"
              value={vehicule}
              onChange={(event) => {
                const { value: newValue } = event.target;
                const action = updateDriverInfos(newValue, 'vehicule');
                dispatch(action);
              }}
            />
          </Grid.Column>
        </Grid>
      </Grid>
    </Grid.Row>
  );
};

export default UpdateDriverInfos;
