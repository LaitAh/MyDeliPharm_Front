import { UPDATE_CURRENT_VITAL_CARD, UPDATE_CURRENT_MUTUAL_CARD } from 'src/actions/orderPatient';

import {
  UPDATE_SIGNIN_FIELD,
  UPDATE_SIGNUP_FIELD,
  SET_PROFIL_TYPE,
  LOGIN,
  LOGOUT,
  SAVE_USER_INFOS,
  SAVE_USER_INFOS_WITHOUT_ADDRESS,
  UPDATE_PROFILE_INFOS,
  UPDATE_PATIENT_INFOS,
  UPDATE_ADDRESS_INFOS,
} from '../actions/user';

export const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phoneNumber: '',
  isLogged: false,
  profilType: '',
  gender: '', // 1: Man, 2: Woman

  // User address
  address: {
    id: '',
    street: '',
    postcode: '',
    city: '',
  },

  // User = patient
  patientInfos: {
    id: '',
    weight: '',
    birthDate: '',
    vitalCardNumber: '',
    mutuelleNumber: '',
    mutualDate: '',
    mutualValidity: false,
    status: '',
  },

  // User = pharmacist
  pharmacistInfos: {
    id: '',
    rppsNumber: '',
    status: '',
  },

  // User = driver
  driverInfos: {
    id: '',
    location: '',
    vehicule: '',
    status: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SIGNIN_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case UPDATE_SIGNUP_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case SET_PROFIL_TYPE:
      return {
        ...state,
        profilType: action.profilType,
      };

    case LOGIN:
      return {
        ...state,
        isLogged: true,
      };

    /* If there is already an address associated with the connected user,
    all the data transmitted by the database is saved in the state */
    case SAVE_USER_INFOS:
      return {
        ...state,
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        phoneNumber: action.phoneNumber,
        gender: action.gender,
        address: action.address,
        patientInfos: action.patientInfos,
        pharmacistInfos: action.pharmacistInfos,
        driverInfos: action.driverInfos,
      };
    /* If the address is empty in the database,
    we save all the data EXCEPT the address in the state */
    case SAVE_USER_INFOS_WITHOUT_ADDRESS:
      return {
        ...state,
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        phoneNumber: action.phoneNumber,
        gender: action.gender,
        patientInfos: action.patientInfos,
        pharmacistInfos: action.pharmacistInfos,
        driverInfos: action.driverInfos,
      };

    case UPDATE_PROFILE_INFOS:
      return {
        ...state,
        [action.name]: action.value,
      };

    case UPDATE_PATIENT_INFOS:
      /* If the update is done on the weight, vitalCardNumber or
      mutuelleNumber, then the data is transformed into a number.
      Otherwise, we store it in string. */
      if (action.name === 'weight') {
        return {
          ...state,
          patientInfos: {
            ...state.patientInfos,
            weight: Number(action.value),
          },
        };
      }
      if (action.name === 'vitalCardNumber') {
        return {
          ...state,
          patientInfos: {
            ...state.patientInfos,
            vitalCardNumber: Number(action.value),
          },
        };
      }
      if (action.name === 'mutuelleNumber') {
        return {
          ...state,
          patientInfos: {
            ...state.patientInfos,
            mutuelleNumber: Number(action.value),
          },
        };
      }
      return {
        ...state,
        patientInfos: {
          ...state.patientInfos,
          [action.name]: action.value,
        },
      };

    case UPDATE_ADDRESS_INFOS:
      return {
        ...state,
        address: {
          ...state.address,
          [action.name]: action.value,
        },
      };

    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        profilType: '',
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        gender: '',
        address: {},
        patientInfos: {},
        pharmacistInfos: {},
        driverInfos: {},
      };

    // Update vitale or mutual number from order form
    case UPDATE_CURRENT_VITAL_CARD:
      return {
        ...state,
        patientInfos: {
          ...state.patientInfos,
          vitalCardNumber: Number(action.vitalCardNumber),
        },
      };
    case UPDATE_CURRENT_MUTUAL_CARD:
      return {
        ...state,
        patientInfos: {
          ...state.patientInfos,
          mutuelleNumber: Number(action.mutuelleNumber),
        },
      };
    default:
      return state;
  }
};

export default reducer;
