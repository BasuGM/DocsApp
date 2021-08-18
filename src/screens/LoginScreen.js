import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Text>Image</Text>
      <Text>Slider</Text>
      <Text>Login with Sign Up Button</Text>
      <Text>Are you a patient?</Text>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
