import { Segment } from 'semantic-ui-react';

const FocusOrder = ({ id, status, firstname, lastname }) => {
  let statusMessage = '';
  let statusColor = '';
  switch (status) {
    case 0:
      statusMessage = ' en attente d’acceptation par le pharmacien';
      statusColor = 'orange';
      break;
    case 1:
      statusMessage = ' en cours de préparation';
      statusColor = 'yellow';
      break;
    case 2:
      statusMessage = ' prête à livrer';
      statusColor = 'blue';
      break;
    case 3:
      statusMessage = ' en cours de livraison';
      statusColor = 'green';
      break;
    case 4:
      statusMessage = ' livrée';
      statusColor = 'grey';
      break;
    default:
      statusMessage = 'defaut value';
  }

  return (
    <Segment color={statusColor}>
      {`La commande est ${statusMessage}`}
    </Segment>
  );
};

export default FocusOrder;
