import styled from 'styled-components/native';
import { Theme } from '../../theme';

interface TabsViewBasicProps {
  theme: Theme;
}

export const TabsViewBasicContainer = styled.TouchableOpacity`
  background-color: ${({ theme }: TabsViewBasicProps) => theme.colors.background};
  padding: 10px;
  border-radius: 5px;
`;

export const TabsViewBasicText = styled.Text`
  color: ${({ theme }: TabsViewBasicProps) => theme.colors.foreground};
  font-size: 16px;
  font-weight: bold;
`;
