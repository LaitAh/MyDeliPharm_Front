import profilImgMan from 'src/assets/img/defaultUserImg/MyDeliPharm_UserProfilImg_Patient-Man.svg';
import profilImgWoman from 'src/assets/img/defaultUserImg/MyDeliPharm_UserProfilImg_Patient-Woman.svg';

import {
  Segment,
  Image,
  List,
  Header,
  Icon,
} from 'semantic-ui-react';

import { useSelector } from 'react-redux';

const DashProfile = () => {
  // Patient informations
  const firstname = useSelector((state) => state.orderCheck.firstNamePatient);
  const lastname = useSelector((state) => state.orderCheck.lastNamePatient);
  const weight = useSelector((state) => state.orderCheck.weight);
  const age = useSelector((state) => state.orderCheck.age);
  const phoneNumber = useSelector((state) => state.orderCheck.phoneNumber);
  const gender = useSelector((state) => state.orderCheck.gender);

  return (
    <Segment id="dashboard__profile-top" textAlign="center">
      {gender === '1' && (
        <Image src={profilImgMan} id="dashboard__profile-top--image" alt="Image de profil" size="small" centered />
      )}
      {gender === '2' && (
        <Image src={profilImgWoman} id="dashboard__profile-top--image" alt="Image de profil" size="small" centered />
      )}
      <Segment basic>
        <Header as="h4">Patient</Header>
        <List>
          <List.Item>{firstname}  {lastname}</List.Item>
          <List.Item><Icon name="phone" size="small" />{phoneNumber}</List.Item>
        </List>
        <Header as="h4">Informations patient</Header>
        <List>
          <List.Item>Poids : {weight} </List.Item>
          <List.Item>Age : {age}</List.Item>
          <List.Item>Sexe : {gender === '1' ? 'M' : ''}{gender === '2' ? 'F' : ''}</List.Item>
        </List>
      </Segment>
    </Segment>

  );
};

export default DashProfile;
