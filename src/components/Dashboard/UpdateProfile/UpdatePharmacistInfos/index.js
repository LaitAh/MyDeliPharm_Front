import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  Grid,
  Header,
} from 'semantic-ui-react';
import { updatePharmacistInfos } from 'src/actions/user';
import './styles.scss';

const UpdatePharmacistInfos = () => {
  const dispatch = useDispatch();

  const rppsNumber = useSelector((state) => state.user.pharmacistInfos.rppsNumber);
  const openingTime = useSelector((state) => state.user.pharmacistInfos.openingTime);

  return (
    <Grid.Row id="updatePharmacistField">
      <Grid stackable columns={2} container>
        <Header as="h3">Information du pharmacien</Header>
        <Grid stackable container>
          <Grid.Column width={8} id="updatePharmacistField-rpps">
            <Form.Field
              control="input"
              type="text"
              label="N° RPPS"
              placeholder="00000000000"
              name="rppsNumber"
              value={rppsNumber}
              onChange={(event) => {
                const { value: newValue } = event.target;
                const action = updatePharmacistInfos(newValue, 'rppsNumber');
                dispatch(action);
              }}
            />
          </Grid.Column>
          <Grid.Column width={8} id="updatePharmacistField-openingTime">
            <Form.Field
              control="input"
              type="text"
              label="Horaire d'ouverture de la pharmacie"
              placeholder="Lun-Ven : 09:00-12:00, 14:00-19:00, Sam : 09:00-12:00"
              name="openingTime"
              value={openingTime}
              onChange={(event) => {
                const { value: newValue } = event.target;
                const action = updatePharmacistInfos(newValue, 'openingTime');
                dispatch(action);
              }}
            />
          </Grid.Column>
        </Grid>
      </Grid>
    </Grid.Row>
  );
};

export default UpdatePharmacistInfos;
