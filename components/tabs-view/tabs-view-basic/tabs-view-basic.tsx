import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TabsViewBasicHookProps, useTabsViewBasic } from './tabs-view-basic.hook';
import { TabsViewBasicContainer, TabsViewBasicText } from './tabs-view-basic.styles';

interface TabsViewBasicProps extends TabsViewBasicHookProps {
  theme: Theme;
  type: string;
  title: string;
  icon?: React.ReactNode;
}

export const TabsViewBasic: React.FC<TabsViewBasicProps> = ({
  setTabs,
  tabs,
  theme,
  type,
  title,
  icon,
  ...props
}) => {
  const { isPressed, handlePressIn, handlePressOut, handlePress, isSelected } =
    useTabsViewBasic({ setTabs, tabs, type });

  return (
    <TabsViewBasicContainer
      theme={theme}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
      {...props}
    >
      {/* {icon && <IconContainer theme={theme}>{icon}</IconContainer>} */}
      <TabsViewBasicText theme={theme}>{title}</TabsViewBasicText>
    </TabsViewBasicContainer>
  );
};
