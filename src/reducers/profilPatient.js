import { SET_PROFIL_INFORMATIONS } from '../actions/profilPatient';
import { UPDATE_PROFILE_INFOS } from '../actions/user';

export const initialState = {
  patientId: '',
  weight: '24',
  age: '',
  status: '', // 0: Unactif, 1: Actif
  // Carte vitale et mutual Number
  cvNumber: '',
  mutualNumber: '',
  mutualDate: '',

  // "Carte vitale" file
  cvUrl: '',

  // Mutual file
  mutualUrl: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFIL_INFORMATIONS:
      return {
        ...state,
        weight: action.weight,
        age: action.age,
        // TODO [action.name]: action.value,
      };

    case UPDATE_PROFILE_INFOS:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
