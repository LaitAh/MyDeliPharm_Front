import { useSelector } from 'react-redux';
import {
  Segment,
  Image,
  Button,
} from 'semantic-ui-react';

import profilImgMan from 'src/assets/img/defaultUserImg/MyDeliPharm_UserProfilImg_Patient-Man.svg';
import profilImgWoman from 'src/assets/img/defaultUserImg/MyDeliPharm_UserProfilImg_Patient-Woman.svg';
import profilImgNeutral from 'src/assets/img/defaultUserImg/MyDeliPharm_UserProfilImg_Patient-Neutral.svg';

const DashProfile = () => {
  const userGender = useSelector((state) => state.user.gender);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

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
            <span>{firstName} {lastName}</span>
          </Segment>
          <Button className="dash_editprofile-button" type="submit" basic color="violet">
            Modifier le profil
          </Button>
        </Segment>
      </Segment>
    </Segment.Group>
  );
};

export default DashProfile;
