import { useSelector, useDispatch } from 'react-redux';
import {
  Form,
  Grid,
  Segment,
  Button,
  Popup,
  Header,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { submitUpdateProfile, createAddress } from 'src/actions/user';
import UpdateUserInfos from './UpdateUserInfos';
import UpdatePatientInfos from './UpdatePatientInfos';
import './styles.scss';
import UpdatePharmacistInfos from './UpdatePharmacistInfos';
import UpdateDriverInfos from './UpdateDriverInfos';

const UpdateProfil = () => {
  const dispatch = useDispatch();
  const profilType = useSelector((state) => state.user.profilType);

  const idAddress = useSelector((state) => state.user.address.id);

  return (
    <Segment as="main" id="dashboard-main--update" basic>
      <Form
        action=""
        id="updateProfile"
        onSubmit={(event) => {
          event.preventDefault();
          console.log('Mise à jour des données');
          if (idAddress === undefined) {
            dispatch(createAddress());
          }
          else {
            dispatch(submitUpdateProfile());
          }
        }}
      >
        <Grid stackable>
          <UpdateUserInfos />
          {profilType === 'patient' && (
            <UpdatePatientInfos />
          )}
          {profilType === 'pharmacist' && (
            <UpdatePharmacistInfos />
          )}
          {profilType === 'driver' && (
            <UpdateDriverInfos />
          )}
        </Grid>
        <Grid columns={3} stackable container id="update-profile--buttons">
          <Button
            className={profilType}
            id="update-profile--save"
            type="submit"
          >
            Valider les informations
          </Button>
          <Button
            as={Link}
            to="/dashboard"
            className={profilType}
            id="update-profile--return"
            type="submit"
          >
            Annuler et retourner au tableau de bord
          </Button>

          <Popup
            trigger={
              <Button id="update-profile--delete" className={profilType}>Supprimer mon compte</Button>
            }
            on="click"
            position="top right"
          >
            <Grid centered columns={2} id="update-profile--popup">
              <Header as="h4" textAlign="center">Attention, cette action est définitive ! </Header>
              <Header as="h5">Etes-vous sûr de vouloir supprimer votre compte ?</Header>
              <Grid.Column textAlign="center">
                <Button
                  as={Link}
                  to="/"
                  id="update-profile--delete-yes"
                  type="submit"
                  onClick={(/* event */) => {
                    console.log('Le compte va être supprimé');
                    // TODO : Delete account
                  }}
                >
                  Oui
                </Button>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Button
                  className={profilType}
                  id="update-profile--delete-cancel"
                  type="submit"
                  onClick={(/* event */) => {
                    console.log('Le compte n\'est pas supprimé');
                  }}
                >
                  Annuler
                </Button>
              </Grid.Column>
            </Grid>
          </Popup>
        </Grid>
      </Form>
    </Segment>
  );
};

export default UpdateProfil;
