import { useEffect } from 'react';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  // useMapEvents,
} from 'react-leaflet';

import L from 'leaflet';

import {
  useSelector,
} from 'react-redux';

import homeIcon from 'src/assets/img/maps/outline_home_black_24dp.png';

const MapAddress = () => {
  const pharmaciesAddress = useSelector((state) => state.osm.resultPharmacies);
  const myLat = useSelector((state) => state.osm.lat);
  const myLon = useSelector((state) => state.osm.lon);
  // Update map when pharamciesAddress changes
  useEffect(() => {}, [pharmaciesAddress]);

  // Marker icon
  //  Create the Icon
  const LeafIcon = L.Icon.extend({
    options: {},
  });

  const myIcon = new LeafIcon({
    iconUrl: homeIcon,
  });
  // Zoom map
  const MyAddressMarker = () => {
    const map = useMap();
    map.flyTo([myLat, myLon], 13);

    return myLat === null ? null : (
      <Marker position={[myLat, myLon]}>
        <Popup>Mon adresse !</Popup>
      </Marker>
    );
  };

  // TODO - GPS tracking when click on the map (Ok)
  // const LocationMarker = () => {
  //   const [position, setPosition] = useState(null);
  //   const map = useMapEvents({
  //     click() {
  //       map.locate();
  //     },
  //     locationfound(e) {
  //       setPosition(e.latlng);
  //       map.flyTo(e.latlng, 10);
  //     },
  //   });
  //   console.log(position);
  //   return position === null ? null : (
  //     <Marker position={position} icon={myIcon}>
  //       <Popup>Mon adresse</Popup>
  //     </Marker>
  //   );
  // };

  return (
    <MapContainer key="map" id="map" center={[46.227638, 2.213749]} zoom={5} scrollWheelZoom>
      <TileLayer
        key="title-layer"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pharmaciesAddress && pharmaciesAddress.map((item) => (
        <Marker key={item.place_id} position={[item.lat, item.lon]}>
          <Popup>
            {item.display_name}
          </Popup>
        </Marker>
      ))}
      {myLat && <MyAddressMarker key="myAddress" id="myAddress" />}
    </MapContainer>
  );
};

export default MapAddress;
