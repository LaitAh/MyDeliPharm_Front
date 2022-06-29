// === ACTION TYPES ===
export const GET_ORDERS_DATA = 'GET_ORDERS_DATA';
export const SAVE_ORDERS_DATA = 'SAVE_ORDERS_DATA';

// === ACTION CREATORS ===

// Get all orders of one Profil
export const getOrdersData = (id) => ({
  type: GET_ORDERS_DATA,
  id: id,
});

export const saveOrdersData = (data) => ({
  type: SAVE_ORDERS_DATA,
  order: data,
});
