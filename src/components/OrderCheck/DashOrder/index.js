import PropTypes from 'prop-types';

import {
  Segment,
  Button,
  Grid,
  Form,
} from 'semantic-ui-react';

import './styles.scss';

import { orderChangeStatus } from 'src/actions/orderCheck';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const DashOrder = ({ checked }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cv, mutual, prescription } = checked;

  const orderId = useSelector((state) => state.orderCheck.orderId);
  const safetyCode = useSelector((state) => state.orderCheck.safetyCode);
  const statusOrder = useSelector((state) => state.orderCheck.statusOrder);

  const routeChangeToDashboard = () => {
    const path = '/dashboard';
    navigate(path);
  };

  let disabledButton = false;
  if ((statusOrder === 1 && (!cv || !mutual || !prescription)) || (statusOrder > 1)) {
    disabledButton = true;
  }

  return (
    <Segment>
      <Grid container stackable>
        <Grid.Column width={5}>
          <p>Commande n° {orderId}</p>
          <p>Code de vérification° {safetyCode}</p>
          <p className="important-text">nouveau patient !</p>
        </Grid.Column>

        <Grid.Column textAlign="right" width={11}>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              if (statusOrder === 0) {
                dispatch(orderChangeStatus(1));
              }
              if (statusOrder === 1 && (!cv || !mutual || !prescription)) {
                disabledButton = true;
              }
              if (statusOrder === 1 && cv && mutual && prescription) {
                routeChangeToDashboard();
                dispatch(orderChangeStatus(2));
              }
            }}
          >
            <Button id="dashpharma__ordercheckButton" type="submit" basic color="violet" disabled={disabledButton}>
              {statusOrder === 0 && 'Préparer la commande'}
              {statusOrder === 1 && (cv && mutual && prescription ? 'Valider la commande' : 'Préparation en cours')}
              {statusOrder === 2 && 'Commande en attente de livraison'}
              {statusOrder === 3 && 'Commande en cours de livraion'}
              {statusOrder === 4 && 'Commande livrée'}
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

DashOrder.propTypes = {
  checked: PropTypes.shape({
    cv: PropTypes.bool.isRequired,
    mutual: PropTypes.bool.isRequired,
    prescription: PropTypes.bool.isRequired,
  }).isRequired,
};

export default DashOrder;
