import axios from 'axios';
import {
  UPDATE_PROFIL_INFORMATIONS,
  GET_PATIENT_DATA,
  savePatientData,
} from 'src/actions/profilPatient';

// Middleware patient
const patientMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_PATIENT_DATA) {
    console.log('GET_PATIENT_DATA');
    axios.get(
      // ID_PATIENT = 3 for test
      'https://api.mydelipharm.eu/api/secure/user/patient/3',

      // Prod
      //`https://api.mydelipharm.eu/api/secure/user/patient/${action.id}`,
    )
      .then((response) => {
        store.dispatch(savePatientData({
          firstname: response.data.user.firstname,
          lastname: response.data.user.lastname,
          phoneNumber: response.data.user.phoneNumber,
          weight: response.data.weight,
          age: response.data.age,
        }));
      })
      . catch((error) => {
        console.log(error);
      });
  }

  if (action.type === UPDATE_PROFIL_INFORMATIONS) {
    console.log('action UPDATE_PROFIL_INFO');
    axios.put(
      'https://api.mydelipharm.eu/api/secure/user/patient/{id}',
      {
        // TODO : JSON object with patient informations
      },
    )
      .then((response) => {
        console.log(response.data);
      })
      . catch((error) => {
        console.log(error);
      });
  }

  next(action);
};

export default patientMiddleware;
