import {
  Grid,
  Container,
  Header,
  Segment,
  Icon,
} from 'semantic-ui-react';

import { useSelector } from 'react-redux';

const Itinerary = () => {
  // Order information
  const orderId = useSelector((state) => state.orderDriver.orderId);
  const safetyCode = useSelector((state) => state.orderDriver.safetyCode);

  // Pharmacy address
  const pharmacyStreet = useSelector((state) => state.orderDriver.pharmacyAddress.street);
  const pharmacyPostcode = useSelector((state) => state.orderDriver.pharmacyAddress.postcode);
  const pharmacyCity = useSelector((state) => state.orderDriver.pharmacyAddress.city);
  const pharmacyPhoneNumber = useSelector((state) => state.orderDriver.pharmacyPhoneNumber);

  // Patient address
  const patientStreet = useSelector((state) => state.orderDriver.patientAddress.street);
  const patientPostcode = useSelector((state) => state.orderDriver.patientAddress.postcode);
  const patientCity = useSelector((state) => state.orderDriver.patientAddress.city);
  const patientPhoneNumber = useSelector((state) => state.orderDriver.patientPhoneNumber);
  const patientFirstName = useSelector((state) => state.orderDriver.patientFirstName);
  const patientLastName = useSelector((state) => state.orderDriver.patientLastName).toUpperCase();

  return (
    <Segment>
      <Grid container stackable>
        <Grid.Column width={4}>
          <Container>
            <Header as="h6">N° de commande: </Header>
            <p>{orderId}</p>
            <Header as="h6">Code de vérification: </Header>
            <p>{safetyCode}</p>
          </Container>
        </Grid.Column>
        <Grid.Column width={4}>
          <Container>
            <Header as="h6">Départ: </Header>
            <p>PHARMACIE</p>
            <p>{pharmacyStreet}</p>
            <p>{pharmacyPostcode}, {pharmacyCity}</p>
            <br />
            <p>{pharmacyPhoneNumber}</p>
          </Container>
        </Grid.Column>
        <Grid.Column width={4}>
          <Container>
            <Icon size="big" name="bicycle" color="violet" />
            <Icon size="big" name="angle double right" color="violet" />
          </Container>
        </Grid.Column>
        <Grid.Column width={4}>
          <Container>
            <Header as="h6">Arrivée: </Header>
            <p>{patientFirstName} {patientLastName}</p>
            <p>{patientStreet}</p>
            <p>{patientPostcode} {patientCity}</p>
            <br />
            <p>{patientPhoneNumber}</p>
          </Container>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Itinerary;
