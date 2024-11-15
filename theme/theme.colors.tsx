import { useColorScheme } from 'react-native';

interface Theme {
  background: string;
  header: {
    background: string;
  };
  tabs: {
    background: string;
  };
  title: {
    color: string;
  };
  card: {
    background: string;
    color: string;
    textColor: string;
  };
  buttonPrimaryBackground: string;
  buttonPrimaryColor: string;
}

const colors = {
  colorBase000: '#FFFFFF',
  colorBase200: '#E4E7EC',
  colorBase700: '#344051',
  colorZinc700: '#3F3F46',
  colorZinc800: '#27272A',
  colorZinc900: '#18181B',
  colorRed100: '#FFE1E1',
  colorRed900: '#FD4949',
  colorGreen100: '#E6F4F1',
  colorGreen900: '#34A853',
  colorOrange100: '#FFEFE5',
  colorOrange900: '#FD8549',
  colorBlue100: '#E2F6FE',
  colorBlue900: '#38BDF8',
};

const colorsFlag = {
  red: {
    color: colors.colorRed900,
    background: colors.colorRed100,
  },
  green: {
    color: colors.colorGreen900,
    background: colors.colorGreen100,
  },
  orange: {
    color: colors.colorOrange900,
    background: colors.colorOrange100,
  },
  blue: {
    color: colors.colorBlue900,
    background: colors.colorBlue100,
  },
};

const light: Theme = {
  background: colors.colorBase200,
  header: {
    background: colors.colorBase000,
  },
  tabs: {
    background: colors.colorBase000,
  },
  title: {
    color: colors.colorZinc900,
  },
  card: {
    background: colors.colorBase000,
    color: colors.colorZinc900,
    textColor: colors.colorZinc700,
  },
  buttonPrimaryBackground: colors.colorBase000,
  buttonPrimaryColor: colors.colorZinc900,
};

const dark: Theme = {
  background: colors.colorZinc700,
  header: {
    background: colors.colorZinc900,
  },
  tabs: {
    background: colors.colorZinc900,
  },
  title: {
    color: colors.colorBase000,
  },
  card: {
    background: colors.colorZinc900,
    color: colors.colorBase000,
    textColor: colors.colorZinc700,
  },
  buttonPrimaryBackground: colors.colorBase000,
  buttonPrimaryColor: colors.colorZinc900,
};
  
export default function getTheme(property: keyof Theme) {
  const colorScheme = useColorScheme();
  
  const selectedTheme = colorScheme === "dark" ? dark : light;
  
  return selectedTheme[property];
}

export { colors, colorsFlag };
