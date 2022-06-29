import { Segment, Step, Icon } from 'semantic-ui-react';

const FocusOrder = ({ id, status, firstname, lastname }) => {
  let statusMessage = '';
  let statusColor = '';
  let step1Title = 'Vérification';
  let step2Title = 'Livraison';
  let step1Message = '';
  let step2Message = '';
  let step1Check = false;
  let step2Check = false;
  let step3Check = false;
  let step1Active = false;
  let step2Active = false;
  let step1Disabled = false;
  let step2Disabled = false;
  let step3Disabled = false;

  switch (status) {
    case 0:
      statusMessage = 'Votre commande n\'a pas encore été vérifée par le pharmacien';
      statusColor = 'orange';
      step1Disabled = true;
      step2Disabled = true;
      step3Disabled = true;
      step1Message = 'en cours';
      break;
    case 1:
      statusMessage = 'Votre commande est en cours de préparation';
      statusColor = 'yellow';
      step1Active = true;
      step2Disabled = true;
      step3Disabled = true;
      step1Title = 'Vérifiée';
      step1Message = 'en cours de préparation';
      break;
    case 2:
      statusMessage = 'Votre commande a été préparée par le pharmacien';
      statusColor = 'blue';
      step1Active = true;
      step2Disabled = true;
      step3Disabled = true;
      step1Title = 'Préparée';
      step1Message = 'en attente d\'un livreur';
      break;
    case 3:
      statusMessage = 'Votre commande est en cours de livraison';
      statusColor = 'green';
      step1Check = true;
      step2Active = true;
      step3Disabled = true;
      step2Message = 'en cours de livraison';
      step1Disabled = true;
      break;
    case 4:
      statusMessage = 'Votre commande a été livrée';
      statusColor = 'grey';
      step1Check = true;
      step2Check = true;
      step3Check = true;
      step1Disabled = true;
      step2Disabled = true;
      step3Disabled = true;
      break;
    default:
      statusMessage = 'defaut value';
  }

  return (
    <>
      <Segment color={statusColor}>
        {statusMessage}
      </Segment>
      <Step.Group attached="top" fluid size="small" stackable="tablet">
        <Step completed={step1Check} active={step1Active} disabled={step1Disabled}>
          <Icon name="pills" />
          <Step.Content>
            <Step.Title>{step1Title}</Step.Title>
            <Step.Description>{step1Message}</Step.Description>
          </Step.Content>
        </Step>

        <Step completed={step2Check} active={step2Active} disabled={step2Disabled}>
          <Icon size="small" name="bicycle" />
          <Step.Content>
            <Step.Title>{step2Title}</Step.Title>
            <Step.Description>{step2Message}</Step.Description>
          </Step.Content>
        </Step>

        <Step completed={step3Check} disabled={step3Disabled}>
          <Step.Content>
            <Step.Title>Commande livrée</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    </>
  );
};

export default FocusOrder;
