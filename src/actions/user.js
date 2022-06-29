// === ACTION TYPES ===
export const UPDATE_SIGNIN_FIELD = 'UPDATE_SIGNIN_FIELD';
export const UPDATE_SIGNUP_FIELD = 'UPDATE_SIGNUP_FIELD';
export const SUBMIT_LOGGIN = 'SUBMIT_LOGGIN';

export const GET_USER_ID_CONNECTED = 'GET_USER_ID_CONNECTED';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const GET_USER_DATA = 'GET_USER_DATA';

export const TOKEN_CHECK = 'TOKEN_CHECK';
export const SET_PROFIL_TYPE = 'SET_PROFIL_TYPE';

export const SAVE_USER_INFOS = 'SAVE_USER_INFOS';
export const SAVE_USER_INFOS_WITHOUT_ADDRESS = 'SAVE_USER_INFOS_WITHOUT_ADDRESS';
export const UPDATE_PROFILE_INFOS = 'UPDATE_PROFILE_INFOS';
export const UPDATE_PATIENT_INFOS = 'UPDATE_PATIENT_INFOS';
export const UPDATE_PHARMACIST_INFOS = 'UPDATE_PHARMACIST_INFOS';
export const UPDATE_DRIVER_INFOS = 'UPDATE_DRIVER_INFOS';
export const UPDATE_ADDRESS_INFOS = 'UPDATE_ADDRESS_INFOS';
export const SUBMIT_UPDATE_PROFILE = 'SUBMIT_UPDATE_PROFILE';
export const CREATE_ADDRESS = 'CREATE_ADDRESS';
export const SUBMIT_UPDATE_PATIENT = 'SUBMIT_UPDATE_PATIENT';
export const SUBMIT_UPDATE_PHARMACIST = 'SUBMIT_UPDATE_PHARMACIST';
export const SUBMIT_UPDATE_DRIVER = 'SUBMIT_UPDATE_DRIVER';

// === ACTION CREATORS ===
// Loggin
export const updateSignInField = (value, name) => ({
  type: UPDATE_SIGNIN_FIELD,
  name: name,
  value: value,
});
export const updateSignUpField = (value, name) => ({
  type: UPDATE_SIGNUP_FIELD,
  name: name,
  value: value,
});
export const submitLoggin = () => ({
  type: SUBMIT_LOGGIN,
});
export const login = () => ({
  type: LOGIN,
});
export const logout = () => ({
  type: LOGOUT,
});

// After loggin get user id and profil type
export const getUserIdConnected = () => ({
  type: GET_USER_ID_CONNECTED,
});

// User informations --> userMiddleware
export const getUserData = () => ({
  type: GET_USER_DATA,
});

// Save user informations into state of reducer orderCheck
export const checkToken = () => ({
  type: TOKEN_CHECK,
});

// Retrieve profilType and store it in the state
export const setProfilType = (profilType) => ({
  type: SET_PROFIL_TYPE,
  profilType: profilType,
});

// Retrieve the data and store it in the state
export const saveUserInfos = (data) => ({
  type: SAVE_USER_INFOS,
  id: data.id,
  gender: data.gender,
  firstName: data.firstname,
  lastName: data.lastname,
  phoneNumber: data.phoneNumber,
  address: data.address[0],
  patientInfos: data.patient,
  pharmacistInfos: data.pharmacist,
  driverInfos: data.driver,
});
// If the user is new, he will not have an associated address
// in the database, so we recover his data without the address
export const saveUserInfosWithoutAddress = (data) => ({
  type: SAVE_USER_INFOS_WITHOUT_ADDRESS,
  id: data.id,
  gender: data.gender,
  firstName: data.firstname,
  lastName: data.lastname,
  phoneNumber: data.phoneNumber,
  patientInfos: data.patient,
  pharmacistInfos: data.pharmacist,
  driverInfos: data.driver,
});
// Update user data in the state
export const updateProfileInfos = (value, name) => ({
  type: UPDATE_PROFILE_INFOS,
  name: name,
  value: value,
});
// Update address data in the state
export const updateAddressInfos = (value, name) => ({
  type: UPDATE_ADDRESS_INFOS,
  name: name,
  value: value,
});
// Update patient data in the state
export const updatePatientInfos = (value, name) => ({
  type: UPDATE_PATIENT_INFOS,
  name: name,
  value: value,
});
// Update pharmacist data in the state
export const updatePharmacistInfos = (value, name) => ({
  type: UPDATE_PHARMACIST_INFOS,
  name: name,
  value: value,
});
// Update driver data in the state
export const updateDriverInfos = (value, name) => ({
  type: UPDATE_DRIVER_INFOS,
  name: name,
  value: value,
});
// If there is no address associated with the user in the database,
// do an axios request to create an address before subitting the rest
// of the state updates to the database (with submitUpdateProfile)
export const createAddress = () => ({
  type: CREATE_ADDRESS,
});
// Submit user and address data (if it already existed in the DB) from state to the database
export const submitUpdateProfile = () => ({
  type: SUBMIT_UPDATE_PROFILE,
});
// If user is a patient, submit the patient data in the state to the database
export const submitUpdatePatient = () => ({
  type: SUBMIT_UPDATE_PATIENT,
});
// If user is a pharmacist, submit the pharmacist data in the state to the database
export const submitUpdatePharmacist = () => ({
  type: SUBMIT_UPDATE_PHARMACIST,
});
// If user is a driver, submit the driver data in the state to the database
export const submitUpdateDriver = () => ({
  type: SUBMIT_UPDATE_DRIVER,
});
