import './styles.scss';

import { useSelector } from 'react-redux';

import {
  MapContainer,
  TileLayer,
  LayersControl,
} from 'react-leaflet';

import RoutingControl from './RoutingControl';

const DeliveryMap = () => {
  const maps = {
    base: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  };
  const orderId = useSelector((state) => state.orderDriver.orderId);

  // Point A - Pharmacy - latA/lonA
  const latA = useSelector((state) => state.orderDriver.pharmacyAddress.lat);
  const lonA = useSelector((state) => state.orderDriver.pharmacyAddress.lon);

  // Point B - Patient - latB/lonB
  const latB = useSelector((state) => state.orderDriver.patientAddress.lat);
  const lonB = useSelector((state) => state.orderDriver.patientAddress.lon);

  return (
    <MapContainer
      key="map"
      id="map"
      center={[46.227638, 2.213749]}
      zoom={5}
      style={{ height: '50vh', width: '100%', padding: 0 }}
    >
      {orderId && latA && lonA && latB && lonB && (
        <RoutingControl
          latA={latA}
          lonA={lonA}
          latB={latB}
          lonB={lonB}
        />
      )}
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Map">
          <TileLayer
            key="title-layer"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url={maps.base}
          />
        </LayersControl.BaseLayer>
      </LayersControl>
    </MapContainer>
  );
};

export default DeliveryMap;
