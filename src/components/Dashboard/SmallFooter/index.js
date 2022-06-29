import { Grid, Segment, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles.scss';

const SmallFooter = () => (
  <Segment as="footer" id="smallFooter">
    <Grid stackable container columns={3}>
      <Grid.Column className="smallFooter-column">
        <Item className="smallFooter-link" as={Link} key="mention-legale" to="/">Mentions légales</Item>
      </Grid.Column>
      <Grid.Column className="smallFooter-column">
        <Item className="smallFooter-link" as={Link} key="a propos" to="/#idapropos">A propos</Item>
      </Grid.Column>
      <Grid.Column className="smallFooter-column">
        <Item className="smallFooter-link" as={Link} key="cgv" to="/cgv">CGV</Item>
      </Grid.Column>
    </Grid>
  </Segment>
);

export default SmallFooter;
