import { submitPharmaciesAroundMe, updateAddressField, findMyAddress } from 'src/actions/osm';

import { submitOrder, updateSelectedPharmacy } from 'src/actions/orderPatient';

import {
  Grid,
  Button,
  Form,
} from 'semantic-ui-react';

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MapAddress from './MapAddress';
import './styles.scss';

const Step3 = () => {
  const dispatch = useDispatch();
  // Pharmacies arround me
  const pharmaciesNumber = useSelector((state) => state.osm.resultNumberPharma);
  const pharmaciesAddress = useSelector((state) => state.osm.resultPharmacies);

  const selectedPharmacy = useSelector((state) => state.order.selectedPharmacy);

  // Address - Patient
  const street = useSelector((state) => state.osm.street);
  const postalcode = useSelector((state) => state.osm.postalcode);
  const city = useSelector((state) => state.osm.city);

  // Address submit state
  const [addressSubmit, setAddressSubmit] = useState(false);

  const navigate = useNavigate();
  const routeChangeToDashboard = () => {
    const path = '/dashboard';
    navigate(path);
  };

  return (
    <div className="step3">
      <Grid stackable container columns={2}>
        <Grid.Column>
          <Grid.Row>
            <Form
              id="address-form"
              action=""
              onSubmit={(event) => {
                event.preventDefault();
                dispatch(submitPharmaciesAroundMe());
                dispatch(findMyAddress());
              }}
            >
              <Form.Field
                readOnly={addressSubmit}
                control="input"
                id="street"
                className={addressSubmit ? 'address--validated' : 'address'}
                label="N° et voie"
                placeholder="ex: 5 rue des Lilas"
                name="street"
                value={street}
                onChange={(event) => {
                  const { value: newValue } = event.target;
                  dispatch(updateAddressField(newValue, 'street'));
                }}
              />
              <Form.Field
                readOnly={addressSubmit}
                control="input"
                id="postalcode"
                className={addressSubmit ? 'address--validated' : 'address'}
                label="Code postal"
                placeholder="ex: 75002"
                name="postalcode"
                value={postalcode}
                onChange={(event) => {
                  const { value: newValue } = event.target;
                  dispatch(updateAddressField(newValue, 'postalcode'));
                }}
              />
              <Form.Field
                readOnly={addressSubmit}
                control="input"
                id="city"
                className={addressSubmit ? 'address--validated' : 'address'}
                label="Ville"
                placeholder="ex: Paris"
                name="city"
                value={city}
                onChange={(event) => {
                  const { value: newValue } = event.target;
                  dispatch(updateAddressField(newValue, 'city'));
                }}
              />
              <Button
                type="submit"
                id="submit-adress"
                onClick={() => {
                  setAddressSubmit(!addressSubmit);
                }}
              >
                {addressSubmit ? 'Modifier mon adresse' : 'Valider mon adresse'}
              </Button>
            </Form>
            <Form>
              <Form.Field
                id="field-form-adress"
                control="select"
                label="Pharmacie partenaire qui prendra en charge votre commande"
                value={selectedPharmacy}
                onChange={(event) => {
                  const { value: newValue } = event.target;
                  console.log(selectedPharmacy);
                  console.log(newValue);
                  dispatch(updateSelectedPharmacy(newValue));
                }}
              >
                {pharmaciesAddress
                  ? pharmaciesAddress.map((item) => (
                    <option value={item.display_name} key={item.osm_id}>{item.display_name}</option>
                  ))
                  : <option value="default" key="default-option">Merci de renseigner votre adresse afin de choisir une pharmacie</option>}
              </Form.Field>
            </Form>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <Form.Field
              id="field-form-time"
              control="select"
              label="Plage horaire souhaitée"
            >
              <option value="morning">09h00 - 12h00</option>
              <option value="midday">12h00 - 13h00</option>
              <option value="afternoon">13h00 - 17h00</option>
              <option value="evening">17h00 - 19h00</option>
            </Form.Field>
          </Grid.Row>
          <MapAddress />
        </Grid.Column>
      </Grid>
      <Form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          if (addressSubmit && selectedPharmacy) {
            dispatch(submitOrder());
            routeChangeToDashboard();
          }
        }}
      >
        <Button
          type="submit"
          id={addressSubmit && selectedPharmacy ? 'nextstep' : 'nextstep--validate'}
          fluid
        >
          Valider ma commande
        </Button>
      </Form>
    </div>
  );
};

export default Step3;
