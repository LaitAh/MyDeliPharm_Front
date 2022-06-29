import {
  UPDATE_SEARCH_VALUE,
  SAVE_RESULT_PHARMACIES_IN_MY_CITY,
  UPDATE_ADDRESS_FIELD,
  SAVE_LAT_LON_ADDRESS,
  SAVE_PHARMACIES_AROUND,
} from 'src/actions/osm';

export const initialState = {
  // Search bar (Home/Banner)
  querySearchBar: '',
  resultSearchBar: '',
  resultNumber: '',

  // Patient address
  street: '',
  postalcode: '',
  city: '',
  lat: '',
  lon: '',

  // Pharmacies around my address
  resultPharmacies: '',
  resultNumberPharma: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_VALUE:
      return {
        ...state,
        querySearchBar: action.query,
      };
    case SAVE_RESULT_PHARMACIES_IN_MY_CITY:
      return {
        ...state,
        resultSearchBar: action.result,
        resultNumber: action.result.length,
      };
    case UPDATE_ADDRESS_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_LAT_LON_ADDRESS:
      return {
        ...state,
        lat: action.lat,
        lon: action.lon,
      };
    case SAVE_PHARMACIES_AROUND:
      return {
        ...state,
        resultPharmacies: action.result,
        resultNumberPharma: action.result.length,
      };

    default:
      return state;
  }
};

export default reducer;
