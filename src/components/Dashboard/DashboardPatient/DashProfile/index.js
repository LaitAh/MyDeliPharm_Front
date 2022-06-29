import { useSelector } from 'react-redux';
import {
  Segment,
  Image,
  Button,
  Header,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import profilImgMan from 'src/assets/img/defaultUserImg/MyDeliPharm_UserProfilImg_Patient-Man.svg';
import profilImgWoman from 'src/assets/img/defaultUserImg/MyDeliPharm_UserProfilImg_Patient-Woman.svg';
import profilImgNeutral from 'src/assets/img/defaultUserImg/MyDeliPharm_UserProfilImg_Patient-Neutral.svg';
import './styles.scss';

const DashProfile = () => {
  const userGender = useSelector((state) => state.user.gender);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  const mutualValidity = useSelector((state) => state.user.patientInfos.mutualValidity);
  console.log(mutualValidity);
  const vitalCardNumber = useSelector((state) => state.user.patientInfos.vitalCardNumber);
  const street = useSelector((state) => state.user.address.street);
  const postcode = useSelector((state) => state.user.address.postcode);
  const city = useSelector((state) => state.user.address.city);

  return (
    <Segment.Group>

      <Segment id="dashboard__profile-top" textAlign="center">
        <Segment id="dashboard__profile-top--imagediv" basic>
          {userGender === 1 && (
            <Image src={profilImgMan} id="dashboard__profile-top--image" alt="Image de profil" size="small" centered />
          )}
          {userGender === 2 && (
            <Image src={profilImgWoman} id="dashboard__profile-top--image" alt="Image de profil" size="small" centered />
          )}
          {userGender !== 1 && userGender !== 2 && (
            <Image src={profilImgNeutral} id="dashboard__profile-top--image" alt="Image de profil" size="small" centered />
          )}
        </Segment>

        <Segment basic>
          <Segment basic>
            {`${firstName} ${lastName}`}
          </Segment>
          <Button
            as={Link}
            to="/dashboard/modifier-profil"
            className="dash_editprofile-button"
            type="submit"
            basic
            color="violet"
          >
            Modifier le profil
          </Button>
        </Segment>
      </Segment>

      <Segment>
        {mutualValidity
        && vitalCardNumber !== ''
        && street !== ''
        && postcode !== ''
        && city !== ''
        && (
          <Header as="h5" id="title-congrat">Félicitation, votre profil est à jour&#8239;!</Header>
        )}
        {(street === '' || postcode === '' || city === '' || street === undefined || postcode === undefined || city === undefined) && (
          <Header as="h5" id="title-warning--address"><Icon name="warning sign" /> Votre adresse n'est pas complête, veuillez mettre à jour votre profil.</Header>
        )}
        {(vitalCardNumber === '' || vitalCardNumber === 0) && (
          <Header as="h5" id="title-warning--cv"><Icon name="warning sign" /> Vous n'avez pas renseigné votre carte vitale, veuillez mettre à jour votre profil.</Header>
        )}
        {!mutualValidity && (
          <Header as="h5" id="title-warning--mutual"><Icon name="warning sign" /> Votre mutuelle n'est plus valide, veuillez mettre à jour votre profil.</Header>
        )}
      </Segment>

    </Segment.Group>
  );
};

export default DashProfile;
