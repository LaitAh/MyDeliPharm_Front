import { useSelector } from 'react-redux';
import {
  Segment,
  Image,
  Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import profilImgMan from 'src/assets/img/defaultUserImg/MyDeliPharm_UserProfilImg_Pharmacist-Man.svg';
import profilImgWoman from 'src/assets/img/defaultUserImg/MyDeliPharm_UserProfilImg_Pharmacist-Woman.svg';
import profilImgNeutral from 'src/assets/img/defaultUserImg/MyDeliPharm_UserProfilImg_Pharmacist-Neutral.svg';

import './styles.scss';
import pharmacyImg from 'src/assets/img/Pharmacy.svg';

const DashProfile = () => {
  // Loads user info from user reducer
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  const userGender = useSelector((state) => state.user.gender);

  return (
    <>
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
              Modifier le profil Pharmacien
            </Button>
          </Segment>
        </Segment>

      </Segment.Group>

      <Segment.Group>

        <Segment id="aa" textAlign="center">
          <Segment textAlign="center" id="" basic>
            <Image src={pharmacyImg} />
          </Segment>
          <Segment basic id="pharmacy__profile-name">
            Pharmacie du Pont-levis
          </Segment>
        </Segment>

        <Segment textAlign="center" basic>
          <p>Horaires d'ouverture</p>
          <p>Adresse</p>
          <p>N° téléphone</p>
        </Segment>

      </Segment.Group>
    </>
  );
};

export default DashProfile;
