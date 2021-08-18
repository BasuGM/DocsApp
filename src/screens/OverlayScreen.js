import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OverlayScreen = () => {
  return (
    <View style={styles.container}>
      <Text>OverlayScreen</Text>
    </View>
  );
};
export default OverlayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
