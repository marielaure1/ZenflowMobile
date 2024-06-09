import React, { useState } from 'react';
import { ScrollView, SectionList, RefreshControl } from 'react-native';
import useStyles from "@/components/layout/template/template.styles";

const Template = ({ children }) => {
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
  );
}

export default Template;
