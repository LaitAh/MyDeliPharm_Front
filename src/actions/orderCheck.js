export const UPDATE_INDEX_ACCORDION = 'UPDATE_INDEX_ACCORDION';
export const UPDATE_ORDER_ID = 'UPDATE_ORDER_ID';
export const GET_ORDER_DATA = 'GET_ORDER_DATA';
export const SAVE_ORDER_DATA = 'SAVE_ORDER_DATA';

export const ORDER_CHANGE_STATUS = 'UPDATE_CHANGE_STATUS';

export const handleAccordionChange = (activeIndex, data) => {
  const { index } = data;
  const newIndex = activeIndex === index ? -1 : index;
  return ({
    type: UPDATE_INDEX_ACCORDION,
    activeIndex: newIndex,
  });
};

export const updateOrderId = (orderId) => ({
  type: UPDATE_ORDER_ID,
  orderId: orderId,
});

export const getOrderData = (id) => ({
  type: GET_ORDER_DATA,
  id: id,
});

export const saveOrderData = (data) => ({
  type: SAVE_ORDER_DATA,
  id: data.id,
  prescriptionUrl: data.prescriptionUrl,
  safetyCode: data.safetyCode,
  status: data.status,
  firstname: data.firstname,
  lastname: data.lastname,
  weight: data.weight,
  age: data.age,
  phoneNumber: data.phoneNumber,
  mutualNumber: data.mutualNumber,
  mutualUrl:  data.mutualUrl,
  cvNumber: data.cvNumber,
  cvUrl: data.cvUrl,
});

export const orderChangeStatus = (status) => ({
  type: ORDER_CHANGE_STATUS,
  status: status,
});
