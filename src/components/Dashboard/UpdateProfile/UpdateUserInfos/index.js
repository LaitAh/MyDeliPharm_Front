import { useSelector, useDispatch } from 'react-redux';
import {
  Form,
  Grid,
  Header,
  Select,
} from 'semantic-ui-react';

import { updateProfileInfos, updateAddressInfos } from 'src/actions/user';
import './styles.scss';

const UpdateUserInfos = () => {
  const dispatch = useDispatch();

  // User
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const phoneNumber = useSelector((state) => state.user.phoneNumber);
  const gender = useSelector((state) => state.user.gender);
  const profilType = useSelector((state) => state.user.profilType);

  // Address
  const street = useSelector((state) => state.user.address.street);
  const postcode = useSelector((state) => state.user.address.postcode);
  const city = useSelector((state) => state.user.address.city);

  const genderOptions = [
    { key: '1', text: 'Homme', value: 1 },
    { key: '2', text: 'Femme', value: 2 },
    { key: '3', text: 'Autre', value: 3 },
  ];

  return (
    <Grid.Row id="userInfos" centered>
      <Grid stackable columns={2} container>
        <Grid.Column width={8} id="userInfos-left">
          <Header as="h3">Information d'utilisateur</Header>

          <Grid stackable container id="updateUserField">

            <Grid.Column width={8} id="updateUserField-firstName">
              <Form.Field
                control="input"
                type="text"
                label="Prénom"
                placeholder="Prénom"
                name="firstName"
                value={firstName}
                onChange={(event) => {
                  const { value: newValue } = event.target;
                  const action = updateProfileInfos(newValue, 'firstName');
                  dispatch(action);
                }}
              />
            </Grid.Column>

            <Grid.Column width={8} id="updateUserField-lastName">
              <Form.Field
                control="input"
                type="text"
                label="Nom"
                placeholder="Nom"
                name="lastName"
                value={lastName}
                onChange={(event) => {
                  const { value: newValue } = event.target;
                  const action = updateProfileInfos(newValue, 'lastName');
                  dispatch(action);
                }}
              />
            </Grid.Column>

            <Grid.Column width={8} id="updateUserField-phoneNumber">
              <Form.Field
                control="input"
                type="text"
                label="N° de téléphone"
                placeholder="06 12 34 56 78"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(event) => {
                  const { value: newValue } = event.target;
                  const action = updateProfileInfos(newValue, 'phoneNumber');
                  dispatch(action);
                }}
              />
            </Grid.Column>

            <Grid.Column width={8} id="updateUserField-gender">
              <Form.Select
                control={Select}
                label="Genre"
                options={genderOptions}
                placeholder="-"
                value={gender}
                onChange={(event, data) => {
                  const action = updateProfileInfos(data.value, 'gender');
                  dispatch(action);
                }}
              />
            </Grid.Column>

          </Grid>
        </Grid.Column>

        <Grid.Column width={8} id="userInfos-right">
          <Header as="h3">Adresse {profilType === 'pharmacist' && ('de la pharmacie')}</Header>

          <Grid stackable container id="updateUserField-address">
            <Grid.Column width={16} id="updateUserField-address--street">
              <Form.Field
                control="input"
                type="text"
                label="N° et rue"
                placeholder="5 rue Charles de Gaulle"
                name="street"
                value={street}
                onChange={(event) => {
                  const { value: newValue } = event.target;
                  const action = updateAddressInfos(newValue, 'street');
                  dispatch(action);
                }}
              />

            </Grid.Column>
            <Grid.Column width={6} id="updateUserField-address--postcode">
              <Form.Field
                control="input"
                type="text"
                label="Code Postal"
                placeholder="75005"
                name="postcode"
                value={postcode}
                onChange={(event) => {
                  const { value: newValue } = event.target;
                  const action = updateAddressInfos(newValue, 'postcode');
                  dispatch(action);
                }}
              />
            </Grid.Column>
            <Grid.Column width={10} id="updateUserField-address--city">
              <Form.Field
                control="input"
                type="text"
                label="Ville"
                placeholder="Paris"
                name="city"
                value={city}
                onChange={(event) => {
                  const { value: newValue } = event.target;
                  const action = updateAddressInfos(newValue, 'city');
                  dispatch(action);
                }}
              />
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    </Grid.Row>

  );
};

export default UpdateUserInfos;
