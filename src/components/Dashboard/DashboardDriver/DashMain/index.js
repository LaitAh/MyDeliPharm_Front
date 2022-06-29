import {
  Header,
  Segment,
  Button,
  Image,
  Grid,
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import dashboardImg from 'src/assets/img/order/Dashboard_Order_Driver.svg';
import './styles.scss';

import { getOrdersData } from 'src/actions/orderTransfer';
import { getOrderToDeliver } from 'src/actions/orderDriver';

import DisplayOrder from './DisplayOrder';
import FocusOrder from './FocusOrder';

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

  const [focus, setfocus] = useState('');

  const handleFocus = (e) => {
    const focusedOrder = e.target.id;
    setfocus(focusedOrder);
  };

  const findOrder = ordersToDisplay.find((order) => order.id === Number(focus));
  const activeOrders = ordersToDisplay.filter((order) => order.status !== 4);
  const archivedOrders = ordersToDisplay.filter((order) => order.status === 4);

  const sendToDeliverOrder = () => {
    dispatch(getOrderToDeliver(findOrder.id));
  };

  return (
    <>
      <Segment.Group>
        <Grid stackable>
          <Grid.Column width={6} basic="true" id="dashboard__main-top">
            <Image src={dashboardImg} id="dashboard__main-top--icon" alt="Image d'une nouvelle commande" />
          </Grid.Column>
          <Grid.Column width={10}>
            <Segment basic>
              <Button
                className=""
                type="submit"
                basic
                color="violet"
                as={Link}
                key="order"
                to="/course"
              >
                Accepter la course
              </Button>
              <p id="dashboard__main-top--text">
                Vous venez de recevoir une course.
              </p>
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment.Group>

      {/* // TODO : show last order as focused order by default  */}
      {findOrder && (
      <Segment.Group>
        <Segment basic raised textAlign="center">
          <Header as="h6" id="">{`Suivi de ma commande n° ${findOrder.id}`}</Header>
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
              to="/course"
              id="dashdriver__order-deliver"
              key={findOrder.id}
              type="submit"
              basic
              color="violet"
              onClick={sendToDeliverOrder}
            >
              Livrer la commande
            </Button>
          </Segment>
        </Segment>
      </Segment.Group>
      )}

      <Segment.Group>
        <Segment basic>
          <Header as="h6" id="">Mes courses</Header>
          {activeOrders.map((order) => (
            <DisplayOrder
              key={order.id}
              {...order}
              handleFocus={handleFocus}
            />
          ))}
        </Segment>

        <Segment basic>
          <Header as="h6" id="">Mes courses terminées</Header>
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
