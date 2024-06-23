import React, { useState } from 'react';
import { ScrollView, SectionList, RefreshControl, View, Text } from 'react-native';
import useStyles from "@/components/layout/template/template.styles";

const Template = ({ children, noScroll = false }) => {
  const styles = useStyles();
  // const [refreshing, setRefreshing] = useState(false);

  // const handleRefresh = async () => {
  //   setRefreshing(true);
  //   if (typeof onRefresh === 'function') {
  //     await onRefresh();
  //   }
  //   setRefreshing(false);
  // };

  return (
    <>
    {!noScroll ? 
    (
      <ScrollView
        style={[styles.scrollView, styles.container]}
        contentInsetAdjustmentBehavior="automatic"
        // refreshControl={
        //   <RefreshControl
        //     refreshing={refreshing}
        //     onRefresh={handleRefresh}
        //     colors={['black']}
        //     tintColor={'white'}
        //   />
        // }
      >
        {children}
      </ScrollView>
    ) : (
      <View className="bg-background w-screen h-screen p-md">
        <Text className='text-9xl'>dsd</Text>
        {children}
      </View>
    )}
      
    </>
    
  );
}

export default Template;
