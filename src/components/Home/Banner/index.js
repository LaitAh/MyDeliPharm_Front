import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Semantic UI
import {
  Segment,
  Header,
  Form,
} from 'semantic-ui-react';

import './styles.scss';

import { updateSearchValue, submitSearchValue } from 'src/actions/osm';

const Banner = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 723px)').matches,
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 723px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  // SearchBar - Pharmacy in my city
  const dispatch = useDispatch();
  const query = useSelector((state) => state.osm.querySearchBar);
  const resultNumber = useSelector((state) => state.osm.resultNumber);

  return (
    <Segment
      // section
      as="section"
      id="banner--color"
      basic
    >
      <Segment
        basic
        as="section"
        id="banner"
      >
        <Header as="h1" id="banner--title">
          MyDeliPharm, la livraison de médicaments à domicile
        </Header>
        <Segment
          as="div"
          id="banner--form"
        >
          <Header as="h3" id="search__form--header">Trouver une pharmacie dans ma ville</Header>
          <Form
            id="search__form"
            action=""
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(submitSearchValue());
            }}
          >
            {matches && (
              <Form.Input
                id="search__form--input"
                action="Rechercher"
                placeholder="Entrez votre adresse ici..."
                type="search"
                label={resultNumber ? `${resultNumber} pharmacies partenaires. Créer un compte et commander.` : ''}
                value={query}
                onChange={(event) => {
                  const { value: newQuery } = event.target;
                  const action = updateSearchValue(newQuery);
                  dispatch(action);
                }}
                focus
              />
            )}
            {!matches && (
              <Form.Input
                id="search__form--input"
                action={{ icon: 'search', className: 'action-button-search' }}
                placeholder="Adresse"
                type="search"
                label={resultNumber ? `${resultNumber} pharmacies partenaires. Créer un compte et commander.` : ''}
                onChange={(event) => {
                  const { value: newQuery } = event.target;
                  const action = updateSearchValue(newQuery);
                  dispatch(action);
                }}
                focus
              />
            )}
          </Form>
        </Segment>
      </Segment>
    </Segment>
  );
};
export default Banner;
