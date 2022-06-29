import axios from 'axios';

import { UPLOAD_PRESCRIPTION, UPLOAD_VITAL_CARD, UPLOAD_MUTUAL_CARD } from 'src/actions/upload';

// Middleware to upload file to server from client
const uploadMiddleware = (store) => (next) => (action) => {
  if (action.type === UPLOAD_PRESCRIPTION) {
    const data = new FormData();
    const file = store.getState().order.selectedOrdo;
    data.append('prescriptionImage', file);

    axios.post(
      `https://api.mydelipharm.eu/api/secure/order/new/${action.orderId}/image`,
      data,
      { headers: { 'Content-Type': 'multipart/form-data' } },
    )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (action.type === UPLOAD_VITAL_CARD) {
    const data = new FormData();
    const cvfile = store.getState().order.selectedCv;
    data.append('vitalCardFile', cvfile);

    axios.post(
      `https://api.mydelipharm.eu/api/secure/patient/new/${action.patientId}/vital`,
      data,
      { headers: { 'Content-Type': 'multipart/form-data' } },
    )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (action.type === UPLOAD_MUTUAL_CARD) {
    const data = new FormData();
    const mutualfile = store.getState().order.selectedMutual;
    data.append('mutuelleFile', mutualfile);

    axios.post(
      `https://api.mydelipharm.eu/api/secure/patient/new/${action.patientId}/mutuelle`,
      data,
      { headers: { 'Content-Type': 'multipart/form-data' } },
    )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  next(action);
};

export default uploadMiddleware;
