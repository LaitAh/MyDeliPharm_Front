import { useState, useEffect } from 'react';

import minWidth from 'src/constants';

import './styles.scss';
import { Card, Header, Segment } from 'semantic-ui-react';

// Data profiles
import dataProfiles from './dataProfiles';

import Profile from './Profile';
import AccordionProfile from './AccordionProfile';

const Profiles = () => {
  const [matches, setMatches] = useState(
    window.matchMedia(`(min-width: ${minWidth})`).matches,
  );

  useEffect(() => {
    window
      .matchMedia(`(min-width: ${minWidth})`)
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  const [activeIndex, setIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setIndex(newIndex);
  };

  return (
    <Segment basic as="section" className="profiles" id="profiles">
      <Header as="h2" textAlign="center" id="profiles-title"> Créer votre compte</Header>
      {matches && (
        <Card.Group as="div" className="profiles-desktop">
          {dataProfiles.map((item) => (
            <Profile
              key={item.profilName}
              profilName={item.profilName}
              profilImg={item.profilImg}
              iconName={item.iconName}
              idProfil={item.idProfil}
              profilUrl={item.profilUrl}
              description={item.description}
            />
          ))}
        </Card.Group>
      )}
      {!matches && (
      <Card.Group as="div" className="profiles-accordion">
        {dataProfiles.map((item) => (
          <AccordionProfile
            key={item.profilName}
            activeIndex={activeIndex}
            handleClick={handleClick}
            profilName={item.profilName}
            index={item.index}
            profilImg={item.profilImg}
            iconName={item.iconName}
            idProfil={item.idProfil}
            profilUrl={item.profilUrl}
            description={item.description}
          />
        ))}
      </Card.Group>
      )}
    </Segment>
  );
};
export default Profiles;
