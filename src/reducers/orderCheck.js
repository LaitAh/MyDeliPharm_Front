import {
  UPDATE_INDEX_ACCORDION,
  UPDATE_ORDER_ID,
  SAVE_ORDER_DATA,
  ORDER_CHANGE_STATUS,
} from 'src/actions/orderCheck';
import { SAVE_PATIENT_DATA } from 'src/actions/profilPatient';

// For Test only
// import pdfTEst from 'src/assets/img/tests/pdf-exemple.pdf';

export const initialState = {
  // Accoridion index
  activeIndex: null,

  // Patient informations --> actions/profilPatient et orderMiddlware
  firstNamePatient: 'NC',
  lastNamePatient: 'NC',
  gender: '1', // 1: Man, 2: Woman

  // Patient informations --> actions/profilPatient et orderMiddlware
  weight: 'NC',
  age: 'NC',
  phoneNumber: 'NC',
  cvNumber: 'NC',
  mutualNumber: 'NC',
  mutualDate: 'NC',
  cvUrl: '',
  mutualUrl: '',

  // Order informations --> actions/orderCheck and orderMiddlware
  orderId: '',
  prescriptionUrl: '',
  safetyCode: '',

  // Order status --> orderTransfert and orderMiddlware
  statusOrder: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INDEX_ACCORDION:
      return {
        ...state,
        activeIndex: action.activeIndex,
      };
    case SAVE_PATIENT_DATA:
      return {
        ...state,
        // TODO action.data from userMiddelware and API
        firstNamePatient: action.firstname,
        lastNamePatient: action.lastname,
        weight: action.weight,
        age: action.age,
        phoneNumber: action.phoneNumber,
      };
    case SAVE_ORDER_DATA:
      return {
        ...state,
        orderId: action.id,
        prescriptionUrl: action.prescriptionUrl,
        safetyCode: action.safetyCode,
        statusOrder: action.status,
        firstNamePatient: action.firstname,
        lastNamePatient: action.lastname,
        weight: action.weight,
        age: action.age,
        phoneNumber: action.phoneNumber,
        mutualNumber: action.mutualNumber,
        mutualUrl: action.mutualUrl,
        cvNumber: action.cvNumber,
        cvUrl: action.cvUrl,
      };
    case UPDATE_ORDER_ID:
      return {
        ...state,
        orderId: action.orderId,
      };
    case ORDER_CHANGE_STATUS:
      return {
        ...state,
        statusOrder: action.status,
      };
    default:
      return state;
  }
};

export default reducer;
