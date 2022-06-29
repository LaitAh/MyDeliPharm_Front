import { Segment, Icon } from 'semantic-ui-react';

const DisplayOrder = ({ id, status, handleFocus }) => {
  let isDisabled = false;

  if (status === 4) {
    isDisabled = true;
  }

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
      statusMessage = ' livraison terminée';
      statusColor = 'grey';
      break;
    default:
      statusMessage = 'defaut value';
  }

  return (
    <Segment raised disabled={isDisabled} compact as="button" id={id} onClick={handleFocus}>
      <Icon color={statusColor} name="circle" />
      {`Commande n°${id} : ${statusMessage}`}
    </Segment>
  );
};

export default DisplayOrder;
