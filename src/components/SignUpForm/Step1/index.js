import { Header, Grid } from 'semantic-ui-react';

import ProfilStep from './ProfilStep';

import './styles.scss';

const Step1 = () => (
  <div className="step1">
    <Header as="h3" id="signUp-title">Choisir un profil</Header>
    <Grid stackable container columns={3}>
      <ProfilStep
        profilName="Patient"
        profilUrl="patient"
        iconName="smile outline"
        idProfil="patientProfil"
        titleProfil="Je suis malade"
      />
      <ProfilStep
        profilName="Pharmacien"
        profilUrl="pharmacist"
        iconName="plus"
        idProfil="pharmacistProfil"
        titleProfil="Je suis pharmacien"
      />
      <ProfilStep
        profilName="Livreur"
        profilUrl="driver"
        iconName="bicycle"
        idProfil="driverProfil"
        titleProfil="J'ai un vélo"
      />
    </Grid>
  </div>
);

export default Step1;
