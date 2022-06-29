import {
  SAVE_ORDER_TO_DELIVER,
} from 'src/actions/orderDriver';

export const initialState = {

  orderId: '',
  safetyCode: '',

  // Pharmacy address
  pharmacyAddress: {
    street: '',
    postcode: '',
    city: '',
    lat: '',
    lon: '',
    osmId: null,
  },
  pharmacyPhoneNumber: 'NC',

  // Patient address
  patientAddress: {
    street: '',
    postcode: '',
    city: '',
    lat: '',
    lon: '',
    osmId: null,
  },
  patientPhoneNumber: 'NC',
  patientFirstName: '',
  patientLastName: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ORDER_TO_DELIVER:
      return {
        ...state,
        orderId: action.orderId,
        safetyCode: action.safetyCode,
        pharmacyAddress: {
          ...state.pharmacyAddress,
          street: action.pharmacyAddress.street,
          postcode: action.pharmacyAddress.postcode,
          city: action.pharmacyAddress.city,
          lat: action.pharmacyAddress.lat,
          lon: action.pharmacyAddress.lon,
          osmId: action.pharmacyAddress.osmId,
        },
        pharmacyPhoneNumber: action.pharmacyPhoneNumber,
        patientAddress: {
          ...state.patientAddress,
          street: action.patientAddress.street,
          postcode: action.patientAddress.postcode,
          city: action.patientAddress.city,
          lat: action.patientAddress.lat,
          lon: action.patientAddress.lon,
          osmId: action.patientAddress.osmId,
        },
        patientPhoneNumber: action.patientPhoneNumber,
        patientFirstName: action.patientFirstName,
        patientLastName: action.patientLastName,
      };
    default:
      return state;
  }
};

export default reducer;
