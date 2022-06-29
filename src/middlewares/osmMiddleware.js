import axios from 'axios';

import {
  GET_PHARMACIES_IN_MY_CITY,
  FIND_MY_ADDRESS,
  GET_PHARMACIES_AROUND_ME,
  saveResultPharmaciesInMyCity,
  saveLatLonAddress,
  savePharmaciesAroundMe,
} from 'src/actions/osm';

// Middleware for search bar with OSM (Open Street Map)
const osmMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_PHARMACIES_IN_MY_CITY) {
    axios.get(
      `https://nominatim.openstreetmap.org/?addressdetails=1&q=pharmacie+${store.getState().osm.querySearchBar}&format=json&limit=50&countrycodes=FR`,
    )
      .then((response) => {
        // Filters with osm_type = node (excluding way etc) and type=pharmacy
        const filterPharma = response.data.filter((item) => (item.osm_type === 'node' && item.type === 'pharmacy'));
        store.dispatch(saveResultPharmaciesInMyCity(filterPharma));
      })

      .catch((error) => {
        console.log(error);
      });
  }

  if (action.type === FIND_MY_ADDRESS) {
    axios.get(
      `https://nominatim.openstreetmap.org/?addressdetails=1&postalcode=${store.getState().osm.postalcode}&street=${store.getState().osm.street}&format=json&limit=50&countrycodes=FR`,
      // "https://nominatim.openstreetmap.org/?addressdetails=1&postalcode=67100&street=21%20rue%20du%20neufeld&format=json&limit=50&countrycodes=FR",
    )
      .then((response) => {
        console.log(response.data);
        const filterAdress = response.data.filter((item) => (item.osm_type === 'node'));
        console.log(filterAdress);
        store.dispatch(saveLatLonAddress(filterAdress[0]));
      })

      .catch((error) => {
        console.log(error);
      });
  }

  if (action.type === GET_PHARMACIES_AROUND_ME) {
    axios.get(
      `https://nominatim.openstreetmap.org/?addressdetails=1&q=pharmacie+${store.getState().osm.postalcode}+${store.getState().osm.city}&format=json&limit=50&countrycodes=FR`,
    )
      .then((response) => {
        console.log(response.data);
        const pharma = response.data.filter((item) => (item.osm_type === 'node' && item.type === 'pharmacy'));
        store.dispatch(savePharmaciesAroundMe(pharma));
      })

      .catch((error) => {
        console.log(error);
      });
  }

  next(action);
};

export default osmMiddleware;
