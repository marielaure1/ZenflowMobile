import { useState } from 'react';

interface TabsViewBasicHookProps {
  setTabs: (type: string) => void;
  tabs: string;
}

export const useTabsViewBasic = ({ setTabs, tabs }: TabsViewBasicHookProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const handlePress = () => {
    setTabs(type);
  };

  return { isPressed, handlePressIn, handlePressOut, handlePress, isSelected: tabs === type };
};
