import { SAVE_ORDERS_DATA } from '../actions/orderTransfer';

export const initialState = {
  orders:
    [],

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ORDERS_DATA:
      return {
        ...state,
        orders: [...action.order],
        // For test when having static orders in state
        // orders: [...state.orders, ...action.order],
      };

    default:
      return state;
  }
};

export default reducer;
