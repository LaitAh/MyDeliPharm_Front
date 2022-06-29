import axios from 'axios';
import {
  CREATE_ADDRESS,
  SUBMIT_UPDATE_PROFILE,
  SUBMIT_UPDATE_PATIENT,
  SUBMIT_UPDATE_PHARMACIST,
  SUBMIT_UPDATE_DRIVER,
  submitUpdateProfile,
  submitUpdatePatient,
  submitUpdatePharmacist,
  submitUpdateDriver,
} from '../actions/user';

const updateMiddleware = (store) => (next) => (action) => {
  // If there is no address in the database, create an address and then call submitUpdateProfile
  if (action.type === CREATE_ADDRESS) {
    const tokenToByCheck = JSON.parse(localStorage.getItem('tokenMyDeliPharm'));
    axios.post(
      // URL
      `https://api.mydelipharm.eu/api/secure/user/address/${store.getState().user.id}`,
      // Données
      {
        street: store.getState().user.address.street,
        postcode: store.getState().user.address.postcode,
        city: store.getState().user.address.city,
      },
      // Token
      { headers: { Authorization: `Bearer ${tokenToByCheck}` } },
    )
      .then((response) => {
        console.log(response);
        store.dispatch(submitUpdateProfile());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Submit all the data updated in the state to the database
  if (action.type === SUBMIT_UPDATE_PROFILE) {
    const tokenToByCheck = JSON.parse(localStorage.getItem('tokenMyDeliPharm'));
    axios.all([
      // User
      axios.put(
        // URL
        `https://api.mydelipharm.eu/api/secure/user/${store.getState().user.id}`,
        // Données
        {
          firstname: store.getState().user.firstName,
          lastname: store.getState().user.lastName,
          phone_number: store.getState().user.phoneNumber,
          gender: store.getState().user.gender,
        },
        // Token
        { headers: { Authorization: `Bearer ${tokenToByCheck}` } },
      ),

      // Address
      axios.put(
        // URL
        `https://api.mydelipharm.eu/api/secure/address/${store.getState().user.address.id}`,
        // Données
        {
          street: store.getState().user.address.street,
          postcode: store.getState().user.address.postcode,
          city: store.getState().user.address.city,
        },
        // Token
        { headers: { Authorization: `Bearer ${tokenToByCheck}` } },
      ),
    ])

      .then((response) => {
        console.log(response);
        const { profilType } = store.getState().user.profilType;
        if (profilType === 'patient') {
          store.dispatch(submitUpdatePatient());
        }
        if (profilType === 'pharmacist') {
          store.dispatch(submitUpdatePharmacist());
        }
        if (profilType === 'driver') {
          store.dispatch(submitUpdateDriver());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Patient
  if (action.type === SUBMIT_UPDATE_PATIENT) {
    const tokenToByCheck = JSON.parse(localStorage.getItem('tokenMyDeliPharm'));
    axios.put(
      // URL
      `https://api.mydelipharm.eu/api/secure/user/patient/${store.getState().user.patientInfos.id}`,
      // Données
      {
        weight: store.getState().user.patientInfos.weight,
        // TODO : reactive age and test when the back has put 24 characters
        // age: store.getState().user.patientInfos.birthDate,
        mutuelle_number: store.getState().user.patientInfos.mutuelleNumber,
        vital_card_number: store.getState().user.patientInfos.vitalCardNumber,
      },
      // Token
      { headers: { Authorization: `Bearer ${tokenToByCheck}` } },
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Pharmacist
  if (action.type === SUBMIT_UPDATE_PHARMACIST) {
    const tokenToByCheck = JSON.parse(localStorage.getItem('tokenMyDeliPharm'));
    axios.put(
      // URL
      `https://api.mydelipharm.eu/api/secure/user/patient/${store.getState().user.pharmacistInfos.id}`,
      // Données
      {
        rppsNumber: store.getState().user.pharmacistInfos.rppsNumber,
        // TODO : opening time
        // openingTime: store.getState().user.pharmacistInfos.openingTime,
      },
      // Token
      { headers: { Authorization: `Bearer ${tokenToByCheck}` } },
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Driver
  if (action.type === SUBMIT_UPDATE_DRIVER) {
    const tokenToByCheck = JSON.parse(localStorage.getItem('tokenMyDeliPharm'));
    axios.put(
      // URL
      `https://api.mydelipharm.eu/api/secure/user/patient/${store.getState().user.driverInfos.id}`,
      // Données
      {
        location: store.getState().user.driverInfos.location,
        vehicule: store.getState().user.pharmacistInfos.vehicule,
      },
      // Token
      { headers: { Authorization: `Bearer ${tokenToByCheck}` } },
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // On passe l'action au suivant
  next(action);
};

export default updateMiddleware;
