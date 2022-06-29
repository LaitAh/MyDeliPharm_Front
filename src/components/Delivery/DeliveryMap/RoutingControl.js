import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';

import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

// OSRM Server
import 'lrm-graphhopper';

const createRoutineMachineLayer = ({
  latA,
  lonA,
  latB,
  lonB,
}) => {
  const route = L.Routing.control({
    position: 'topleft',
    waypoints: [
      L.latLng(latA, lonA),
      L.latLng(latB, lonB),
    ],
    lineOptions: {
      styles: [
        {
          color: '#757de8',
        },
      ],
    },
    // OSRM Server and free API Key
    router: L.Routing.graphHopper('c16ba3e5-32e7-43be-95a7-11eb23f0685f'),
  });

  return route;
};

// Pass our createRoutingMachineLayer to the createControlHook:
const RoutingMachine = createControlComponent(createRoutineMachineLayer);

// Export
export default RoutingMachine;
