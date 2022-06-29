export const GET_ORDER_TO_DELIVER = 'GET_ORDER_TO_DELIVER';

export const SAVE_ORDER_TO_DELIVER = 'SAVE_ORDER_TO_DELIVER';

export const getOrderToDeliver = (id) => ({
  type: GET_ORDER_TO_DELIVER,
  id: id,
});

export const saveOrderToDeliver = (data) => ({
  type: SAVE_ORDER_TO_DELIVER,
  orderId: data.orderId,
  safetyCode: data.safetyCode,
  pharmacyAddress: data.pharmacyAddress,
  pharmacyPhoneNumber: data.pharmacyPhoneNumber,
  patientAddress: data.patientAddress,
  patientPhoneNumber: data.patientPhoneNumber,
  patientFirstName: data.patientFirstName,
  patientLastName: data.patientLastName,
});
