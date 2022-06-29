import axios from 'axios';

import { GET_ORDERS_DATA, saveOrdersData } from 'src/actions/orderTransfer';

import { submitUploadPrescription } from 'src/actions/upload';

import { saveOrderData, GET_ORDER_DATA, ORDER_CHANGE_STATUS } from 'src/actions/orderCheck';

import { SUBMIT_ORDER } from 'src/actions/orderPatient';

import { GET_ORDER_TO_DELIVER, saveOrderToDeliver } from 'src/actions/orderDriver';

const tokenToByCheck = JSON.parse(localStorage.getItem('tokenMyDeliPharm'));
// Middleware to order products
const orderMiddleware = (store) => (next) => (action) => {
  if (action.type === SUBMIT_ORDER) {
    const { id } = store.getState().user.patientInfos;
    axios.post(
      `https://api.mydelipharm.eu/api/secure/order/new/${id}`,
      {
        status: 0,
      },
      { headers: { Authorization: `Bearer ${tokenToByCheck}` } },
    )
      .then((response) => {
        store.dispatch(submitUploadPrescription(response.data.id));
      })
      . catch((error) => {
        console.log(error);
      });
  }

  if (action.type === GET_ORDER_DATA) {
    axios.get(
      `https://api.mydelipharm.eu/api/secure/order/${action.id}`,
      { headers: { Authorization: `Bearer ${tokenToByCheck}` } },
    )
      .then((response) => {
        store.dispatch(saveOrderData({
          id: response.data.id,
          prescriptionUrl: response.data.prescriptionImage,
          safetyCode: response.data.safetyCode,
          status: response.data.status,
          firstname: response.data.patient.user.firstname,
          lastname: response.data.patient.user.lastname,
          phoneNumber: response.data.patient.user.phoneNumber,
          weight: response.data.patient.weight,
          age: response.data.patient.age,
          mutualNumber: response.data.patient.mutuelleNumber,
          mutualUrl: response.data.patient.mutuelleFile,
          cvNumber: response.data.patient.vitalCardNumber,
          cvUrl: response.data.patient.vitalCardFile,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (action.type === GET_ORDERS_DATA) {
    axios.get(
      'https://api.mydelipharm.eu/api/secure/profil',
      { headers: { Authorization: `Bearer ${tokenToByCheck}` } },
    )
      .then((response) => {
        const profileToLog = response.data.pharmacist || response.data.patient
        || response.data.driver;
        store.dispatch(saveOrdersData(profileToLog.orders));
        console.log(profileToLog);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (action.type === ORDER_CHANGE_STATUS) {
    const { orderId } = store.getState().orderCheck;
    axios.put(
      `https://api.mydelipharm.eu/api/secure/order/${orderId}`,
      {
        status: action.status,
      },
      { headers: { Authorization: `Bearer ${tokenToByCheck}` } },
    )
      .then((response) => {
        console.log(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  if (action.type === GET_ORDER_TO_DELIVER) {
    axios.get(
      `https://api.mydelipharm.eu/api/secure/order/${action.id}`,
      { headers: { Authorization: `Bearer ${tokenToByCheck}` } },
    )
      .then((response) => {
        console.log(response.data);
        store.dispatch(saveOrderToDeliver({
          orderId: action.id,
          safetyCode: response.data.safetyCode,
          pharmacyAddress: response.data.pharmacist.user.address[0],
          pharmacyPhoneNumber: response.data.pharmacist.user.phoneNumber,
          patientAddress: response.data.patient.user.address[0],
          patientPhoneNumber: response.data.patient.user.phoneNumber,
          patientFirstName: response.data.patient.user.firstname,
          patientLastName: response.data.patient.user.lastname,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  next(action);
};

export default orderMiddleware;
