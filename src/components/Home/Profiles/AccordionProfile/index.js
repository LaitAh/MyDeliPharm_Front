import PropTypes from 'prop-types';
import './styles.scss';
import { Icon, Accordion } from 'semantic-ui-react';

import Profile from '../Profile';

const AccordionProfile = ({
  profilName,
  index,
  activeIndex,
  handleClick,
  profilImg,
  description,
  iconName,
  idProfil,
  profilUrl,
}) => (
  <Accordion className="profil-accordion">
    <Accordion.Title
      active={activeIndex === index}
      index={index}
      onClick={handleClick}
      className={`accordion__title accordion__title--${profilName}`}
      id="accordion__title"
    >
      {profilName}
      <Icon name="plus" className="title__icon" />
    </Accordion.Title>
    <Accordion.Content
      active={activeIndex === index}
      className="accordion__content"
      content={(
        <Profile
          profilName={profilName}
          profilImg={profilImg}
          description={description}
          iconName={iconName}
          idProfil={idProfil}
          profilUrl={profilUrl}
        />
      )}
    />
  </Accordion>
);

AccordionProfile.propTypes = {
  profilName: PropTypes.string.isRequired,
  profilImg: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  idProfil: PropTypes.string.isRequired,
  profilUrl: PropTypes.string.isRequired,
};

export default AccordionProfile;
