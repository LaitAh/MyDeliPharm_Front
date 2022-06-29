import { PROFIL_CHOICE, UPDATE_SIGNUP_STEP_FORM } from '../actions/signup';

export const initialState = {
  profilName: '',
  icon: '',
  idProfil: '',
  profilUrl: '',
  activeIndex: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFIL_CHOICE:
      return {
        ...state,
        profilName: action.profilName,
        icon: action.icon,
        idProfil: action.idProfil,
        profilUrl: action.profilUrl,
      };
    case UPDATE_SIGNUP_STEP_FORM:
      return {
        ...state,
        activeIndex: action.activeIndex,
      };

    default:
      return state;
  }
};

export default reducer;
