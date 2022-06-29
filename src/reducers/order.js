import {
  UPDATE_ORDER_STEP_FORM,
  UPDATE_ORDER_FIELD,
  UPDATE_FILE_UPLOADED,
  UPDATE_SELECTED_PHARMACY,
} from 'src/actions/orderPatient';

import { SAVE_USER_INFOS } from 'src/actions/user';

export const initialState = {
  // Step index
  activeIndex: 0,

  // Carte vitale et mutual Number
  cvNumber: '',
  mutualNumber: '',
  mutualDate: '',

  // Ordonnance file
  selectedOrdo: '',
  extensionOrdo: '',

  // "Carte vitale" file
  selectedCv: '',
  extensionCv: '',

  // Mutual file
  selectedMutual: '',
  extensionMutual: '',

  // patient selected pharmacy
  selectedPharmacy: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ORDER_STEP_FORM:
      return {
        ...state,
        activeIndex: action.activeIndex,
      };

    // case SAVE_USER_INFOS:
    //   return {
    //     ...state,
    //     cvNumber: action.patient.vitalCardNumber,
    //     mutualNumber: action.patient.mutualNumber,
    //   };
    case UPDATE_ORDER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case UPDATE_FILE_UPLOADED:
      return {
        ...state,
        [action.nameFile]: action.selectedFile,
        [action.nameExtension]: action.extensionFile,
      };
    case UPDATE_SELECTED_PHARMACY:
      return {
        ...state,
        selectedPharmacy: action.selectedPharmacy,
      };
    default:
      return state;
  }
};

export default reducer;
