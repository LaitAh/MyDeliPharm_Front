import { combineReducers } from 'redux';

import userReducer from './user';
import signupReducer from './signup';
import orderReducer from './order';
import orderCheckReducer from './orderCheck';
import orderTransferReducer from './orderTransfer';
import profilPatientReducer from './profilPatient';
import osmReducer from './osm';
import orderDriverReducer from './orderDriver';

const rootReducer = combineReducers({
  user: userReducer,
  signup: signupReducer,
  order: orderReducer,
  orderCheck: orderCheckReducer,
  orderTransfer: orderTransferReducer,
  profilPatient: profilPatientReducer,
  osm: osmReducer,
  orderDriver: orderDriverReducer,
});

export default rootReducer;
