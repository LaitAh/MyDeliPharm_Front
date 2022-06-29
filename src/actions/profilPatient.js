export const SET_PROFIL_INFORMATIONS = 'SET_PROFIL_INFORMATIONS';
export const UPDATE_PROFIL_INFORMATIONS = 'UPDATE_PROFIL_INFORMATIONS';

export const GET_PATIENT_DATA = 'GET_PATIENT_DATA';
export const SAVE_PATIENT_DATA = 'SAVE_PATIENT_DATA';

// Patient Profil
export const updatPatientProifl = (value, name) => ({
  type: SET_PROFIL_INFORMATIONS,
  name: name,
  value: value,
});

export const submitUpdateProfil = () => ({
  type: UPDATE_PROFIL_INFORMATIONS,
});

// For patient and pharmacist dashboard

export const getPatientData = (id) => ({
  type: GET_PATIENT_DATA,
  id: id,
});

// Save user informations into state of reducer orderCheck
export const savePatientData = (data) => ({
  type: SAVE_PATIENT_DATA,
  firstname: data.firstname,
  lastname: data.lastname,
  weight: data.weight,
  age: data.age,
  phoneNumber: data.phoneNumber,
});
