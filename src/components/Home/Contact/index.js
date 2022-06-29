import {
  Button,
  Checkbox,
  Form,
  Segment,
  Header,
  Grid,
  List,
} from 'semantic-ui-react';

import './styles.scss';

const Contact = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // dispatch();
  };
  return (
    <Segment basic as="section" id="home-contact">
      <Header as="h2">Nous contacter</Header>
      <Grid stackable container columns={2}>
        <Grid.Column>
          <Form onSubmit={handleSubmit}>
            <Form.Field required>
              <input placeholder="Prénom" />
            </Form.Field>
            <Form.Field>
              <input placeholder="Nom" />
            </Form.Field>
            <Form.Field>
              <input placeholder="E-mail" />
            </Form.Field>
            <Form.Field>
              <input placeholder="Numéro de téléphone" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="Veuillez me contacter par téléphone" />
            </Form.Field>
            <Form.TextArea placeholder="Ecrivez votre message" />
            <Button id="contact-button-submit" type="submit">Envoyer</Button>
          </Form>
        </Grid.Column>
        <Grid.Column>
          <Header as="h4">Contactez-nous !</Header>
          <List as="div">
            <List.Item as="p">N’hésitez pas à nous contacter pour tout renseignement&#8239;:</List.Item>
            <List.Item>
              <List.Icon name="pills" />
              <List.Content>MyDeliPharm</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content>Paris, France</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="mail" />
              <List.Content>
                <a href="mailto:service-client@mydelipharm.eu">service-client@mydelipharm.eu</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="https://mydelipharm.eu">https://mydelipharm.eu</a>
              </List.Content>
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Contact;
