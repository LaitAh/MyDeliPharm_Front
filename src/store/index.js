import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import signUpMiddleware from 'src/middlewares/signUpMiddleware';
import signInMiddleware from 'src/middlewares/signInMiddleware';
import userMiddleware from 'src/middlewares/userMiddleware';
import orderMiddleware from 'src/middlewares/orderMiddleware';
import patientMiddleware from 'src/middlewares/patientMiddleware';
import osmMiddleware from 'src/middlewares/osmMiddleware';
import updateMiddleware from 'src/middlewares/updateMiddleware';
import uploadMiddleware from 'src/middlewares/uploadMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    signUpMiddleware,
    signInMiddleware,
    patientMiddleware,
    userMiddleware,
    orderMiddleware,
    osmMiddleware,
    updateMiddleware,
    uploadMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
