// === ACTION TYPES ===
export const PROFIL_CHOICE = 'PROFIL_CHOICE';
export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const UPDATE_SIGNUP_STEP_FORM = 'UPDATE_SIGNUP_STEP_FORM';

// === ACTION CREATORS ===
export const setProfilChoice = (profilName, icon, idProfil, profilUrl) => ({
  type: PROFIL_CHOICE,
  profilName: profilName,
  icon: icon,
  idProfil: idProfil,
  profilUrl: profilUrl,
});
export const createNewUser = () => ({
  type: CREATE_NEW_USER,
});
export const handleTabChange = (data) => ({
  type: UPDATE_SIGNUP_STEP_FORM,
  activeIndex: data.activeIndex,
});
export const handleButtonTabChange = (activeIndex) => {
  const newIndex = activeIndex + 1;
  return ({
    type: UPDATE_SIGNUP_STEP_FORM,
    activeIndex: newIndex,
  });
};

export const handleHomeIndexChange = () => ({
  type: UPDATE_SIGNUP_STEP_FORM,
  activeIndex: 1,
});
