import {AnimationObject} from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../assets/animations/Lottie4.json'),
    text: 'Bienvenue sur Zenflow, votre solution complète pour gérer efficacement votre microentreprise.',
    textColor: 'orange',
    backgroundColor: '#F8E9B0',
  },
  {
    id: 2,
    animation: require('../assets//animations/Lottie2.json'),
    text: 'Simplifiez votre quotidien avec notre CRM, la gestion de projets et la prise de notes intégrée.',
    textColor: 'orange',
    backgroundColor: '#F8E9B0',
  },
  {
    id: 3,
    animation: require('../assets//animations/Lottie3.json'),
    text: 'Rejoignez-nous dès maintenant!',
    textColor: 'orange',
    backgroundColor: '#F8E9B0',
  },
];

export default data;
