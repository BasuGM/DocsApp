import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>Header</Text>
      <Text>Search Bar</Text>
      <Text>Task for Today</Text>
      <Text>Nav</Text>
      <Text>Material Bottom</Text>
      <Text></Text>
      <Text>Overlay</Text>
      <Text>Text</Text>
      <Text>Call Tab</Text>
      <Text>56 Seconds</Text>
      <Text>I'm not ready</Text>
      <Text>Call now</Text>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
