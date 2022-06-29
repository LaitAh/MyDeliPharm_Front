import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import {
  Header,
  Segment,
  Button,
} from 'semantic-ui-react';
import { getOrdersData } from 'src/actions/orderTransfer';
import { getOrderData } from 'src/actions/orderCheck';
import DisplayOrder from './DisplayOrder';

import FocusOrder from './FocusOrder';

import './styles.scss';

const DashMain = () => {
  const dispatch = useDispatch();

  // == Go API request to get orders at every set time interval ==
  // useEffect(() => {
  //   dispatch(getOrdersData());

  //   const interval = setInterval(() => {
  //     dispatch(getOrdersData());
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  // == Version without time interval ==
  useEffect(() => {
    dispatch(getOrdersData());
  }, []);

  // Loads orders to display from state (orderTransfer reducer)
  const ordersToDisplay = useSelector((state) => state.orderTransfer.orders);

  // == Focusing an order on click ==
  // - When an order (in DisplayOrder) is clicked the callback function
  // handleFocus retrieves the id of the clicked order.
  // - the state focus is set to the value of the id
  // - a find() method is used to get the order (in the orders list)
  // that has the same id as the id in state, the result is findOrder (an object)
  // - a component FocusOrder is created with the properties of the selected order.

  const [focus, setfocus] = useState();

  const handleFocus = (e) => {
    const focusedOrder = e.target.id;
    setfocus(focusedOrder);
  };

  const findOrder = ordersToDisplay.find((order) => order.id === Number(focus));
  const activeOrders = ordersToDisplay.filter((order) => order.status !== 4);
  const archivedOrders = ordersToDisplay.filter((order) => order.status === 4);

  // == Go checkOrder page to check the focused order when click to verify ==
  // - getPatientData => this action (profilPatient actions)
  // will receive the focused order's patient_id as payload
  // - when processed in the patientMiddleware, the patient_id
  // payload will be concatenated into the requested endpoint to load the corresponding
  // patient's data.
  const sendToCheckOrder = () => {
    dispatch(getOrderData(findOrder.id));
  };

  return (
    <>
      {findOrder && (
      <Segment.Group>
        <Segment basic raised>
          <Header as="h6" id="">{`Commandes n° ${findOrder.id}`}</Header>
          <FocusOrder
            // from orderTransfer
            key={findOrder.id}
            {...findOrder}
            idfocus={focus}
          />
        </Segment>

        <Segment basic>
          <Segment basic textAlign="center">
            <Button
              as={Link}
              to="/preparation-commande"
              id="dashpharma__order-check"
              key={findOrder.id}
              type="submit"
              basic
              color="violet"
              onClick={sendToCheckOrder}
            >
              Vérifier la commande
            </Button>
          </Segment>
        </Segment>
      </Segment.Group>
      )}

      <Segment.Group className="orders-display-dash">
        <Segment basic>
          <Header as="h6" id="">Commandes en cours</Header>
          <Segment.Group className="orders-display-group" compact>
            {activeOrders.map((order) => (
              <DisplayOrder
                key={order.id}
                {...order}
                handleFocus={handleFocus}
              />
            ))}
          </Segment.Group>
        </Segment>

        <Segment basic>
          <Header as="h6" id="">Commandes terminées</Header>
          {archivedOrders.map((order) => (
            <DisplayOrder
              key={order.id}
              {...order}
              handleFocus={handleFocus}
            />
          ))}
        </Segment>
      </Segment.Group>
    </>
  );
};

export default DashMain;
