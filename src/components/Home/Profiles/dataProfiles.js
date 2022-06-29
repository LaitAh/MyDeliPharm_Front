// Profils image
import PatientImg from 'src/assets/img/profiles/PatientProfil.svg';
import PharmacistImg from 'src/assets/img/profiles/PharmacistProfil.svg';
import DriverImg from 'src/assets/img/profiles/DriverProfil.svg';

const dataProfiles = [
  {
    profilName: 'Patient',
    index: 0,
    profilImg: PatientImg,
    iconName: 'smile outline',
    idProfil: 'patientProfil',
    profilUrl: 'patient',
    description: [
      'me faire livrer des médicaments sous ordonnance',
      'choisir ma pharmacie',
      'planifier ma livraison',
      'suivre ma livraison',
    ],
  },
  {
    profilName: 'Pharmacien',
    index: 1,
    profilImg: PharmacistImg,
    iconName: 'plus',
    idProfil: 'pharmacistProfil',
    profilUrl: 'pharmacist',
    description: [
      'devenir partenaire et mettre en ligne mon officine',
      'toucher une nouvelle patientèle',
      'gérer mes délivrances en sécurité',
      'digitaliser mes délivrances',
    ],
  },
  {
    profilName: 'Livreur',
    index: 2,
    profilImg: DriverImg,
    iconName: 'bicycle',
    idProfil: 'driverProfil',
    profilUrl: 'driver',
    description: [
      'devenir partenaire',
      'accepter et récupérer des commandes',
      'livrer des commandes',
      'suivre mes commandes assignées',
    ],
  },
];

export default dataProfiles;
