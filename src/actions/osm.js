// === ACTION TYPES ===
// Pharmacies - Search Bara (Home/Banner)
export const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE';
export const GET_PHARMACIES_IN_MY_CITY = 'GET_PHARMACIES_IN_MY_CITY ';
export const SAVE_RESULT_PHARMACIES_IN_MY_CITY = 'SAVE_RESULT_PHARMACIES_IN_MY_CITY';

// My address (patient)
export const UPDATE_ADDRESS_FIELD = 'UPDATE_ADDRESS_FIELD';
export const FIND_MY_ADDRESS = 'FIND_MY_ADDRESS';
export const SAVE_LAT_LON_ADDRESS = 'SAVE_LAT_LON_ADDRESS';
export const GET_PHARMACIES_AROUND_ME = 'GET_PHARMACIES_AROUND_ME';
export const SAVE_PHARMACIES_AROUND = 'SAVE_PHARMACIES_AROUND';

// === ACTION CREATORS ===
// Pharmacies - Search Bara (Home/Banner)
export const updateSearchValue = (query) => ({
  type: UPDATE_SEARCH_VALUE,
  query: query,
});

export const submitSearchValue = () => ({
  type: GET_PHARMACIES_IN_MY_CITY,
});

export const saveResultPharmaciesInMyCity = (result) => ({
  type: SAVE_RESULT_PHARMACIES_IN_MY_CITY,
  result: result,
});

// My address (patient)
export const updateAddressField = (value, name) => ({
  type: UPDATE_ADDRESS_FIELD,
  name: name,
  value: value,
});

export const findMyAddress = () => ({
  type: FIND_MY_ADDRESS,
});
export const saveLatLonAddress = (result) => ({
  type: SAVE_LAT_LON_ADDRESS,
  lat: result.lat,
  lon: result.lon,
});

export const submitPharmaciesAroundMe = () => ({
  type: GET_PHARMACIES_AROUND_ME,
});

export const savePharmaciesAroundMe = (result) => ({
  type: SAVE_PHARMACIES_AROUND,
  result: result,
});
