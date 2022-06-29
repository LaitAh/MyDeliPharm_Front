import './styles.scss';

import {
  Segment,
  Header,
  Grid,
  Container,
  Button,
} from 'semantic-ui-react';
import { useNavigate } from 'react-router';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

import pharmaciesData from './pharmaciesData';

const Pharmacies = () => {
  const navigate = useNavigate();

  const routechangeToSignUp = () => {
    const path = '/inscription';
    navigate(path);
  };

  return (
    <Segment basic as="section" className="pharmacies" id="home-pharmacies">
      <Header as="h2">Nos pharmacies partenaires</Header>
      <Grid stackable container columns={2}>
        <Grid.Column id="map-column">
          <MapContainer key="map" id="map" center={[46.227638, 2.213749]} zoom={5} scrollWheelZoom>
            <TileLayer
              key="title-layer"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {pharmaciesData.map((item) => (
              <Marker key={item.name} position={[item.latLng[0], item.latLng[1]]}>
                <Popup>
                  {item.name}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </Grid.Column>
        <Grid.Column as={Container} id="text-pharmacies">
          <p className="p-text-pharmacies">
            Nous sommes présents dans la plupart des grandes villes françaises&#8239;: Paris,
            Rennes, Strasbourg, Toulouse, Marseille, Clermont-Ferrand, …
          </p>
          <p className="p-text-pharmacies">
            Avec MyDeliPharm, il n’a jamais été aussi simple de se
            faire livrer des médicaments sans bouger de chez soi.
          </p>
          <p className="p-text-pharmacies">
            Pharmacien titulaire&#8239;?
            N'hésitez pas, créer un compte et proposer votre officine&#8239;!
          </p>
          <Button
            id="create-account"
            type="submit"
            onClick={routechangeToSignUp}
          >
            Créer un compte
          </Button>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Pharmacies;
