import React, { useState, ReactNode } from 'react';
import { ScrollView, RefreshControl, View, Text } from 'react-native';
import useStyles from "@/components/layout/template/template.styles";

type TemplateProps = {
  children: ReactNode,
  noScroll?: boolean,
  onRefresh?: () => Promise<void>
};

const Template = ({ children, noScroll = false, onRefresh }: TemplateProps) => {
  const styles = useStyles();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    if (typeof onRefresh === 'function') {
      await onRefresh();
    }
    setRefreshing(false);
  };

  return (
    <>
      {!noScroll ? (
        <ScrollView
          className="bg-background w-screen h-screen p-md"
          contentInsetAdjustmentBehavior="automatic"
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={['black']}
              tintColor={'white'}
            />
          }
        >
          {children}
          <View className="h-[80px]"></View>
        </ScrollView>
      ) : (
        <View className="bg-background w-screen h-screen p-md">
          {children}
          <View className="h-[80px]"></View>
        </View>
      )}
    </>
  );
}

export default Template;
