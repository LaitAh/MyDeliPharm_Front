import { Segment, Tab, Header } from 'semantic-ui-react';

import { useSelector, useDispatch } from 'react-redux';

import { handleTabChange } from 'src/actions/orderPatient';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
// import Step4 from './Step4';

import './styles.scss';

const OrderForm = () => {
  const dispatch = useDispatch();

  const activeIndex = useSelector((state) => state.order.activeIndex);

  const panes = [
    {
      menuItem: 'Etape 1',
      render: () => <Tab.Pane key="etape1" attached={false}><Step1 /></Tab.Pane>,
    },
    {
      menuItem: 'Etape 2',
      render: () => <Tab.Pane key="etape2" attached={false}><Step2 /></Tab.Pane>,
    },
    {
      menuItem: 'Etape 3',
      render: () => <Tab.Pane key="etape3" attached={false}><Step3 /></Tab.Pane>,
    },
    // TODO (v2) : payement step
    // {
    //   menuItem: 'Etape 4 - Paiement',
    //   render: () => <Tab.Pane key="etape4" attached={false}><Step4 /></Tab.Pane>,
    // },
  ];

  return (
    <Segment basic>
      <Header as="h3" textAlign="center">Nouvelle commande</Header>
      <Tab
        key="tab"
        menu={{ secondary: true, pointing: true }}
        panes={panes}
        id="order-tab"
        activeIndex={activeIndex}
        onTabChange={(e, data) => {
          const action = handleTabChange(data);
          dispatch(action);
        }}
      />
    </Segment>
  );
};
export default OrderForm;
