import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Text style={styles.imageText}>Image</Text>
      </View>
      {/* <Text>WORKING HERE</Text> */}
      <View style={styles.bottomPart}>
        <View>
          <Text>Image Slider</Text>
        </View>
        <View style={styles.buttonHolder}>
          <View style={styles.buttonTile}>
            <Text style={styles.buttonTileText}>Log in</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.buttonTile}>
            <Text style={styles.buttonTileText}> Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.patientTitle}>
          <Text style={styles.patientTitleText}>Are you a patient? </Text>
          <Text style={styles.patientTitleUnderline}>Get Here! </Text>
        </View>
      </View>
      {/* <Text>WORKING HERE</Text> */}
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  //   Image
  image: {
    borderWidth: 1,
    width: '100%',
    height: '60%',
    borderBottomLeftRadius: 60,
  },
  imageText: {
    position: 'absolute',
    bottom: 40,
    left: 50,
  },

  // Bottom Part
  bottomPart: {
    width: '100%',
    borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 30,
  },

  //   Button Holder
  buttonHolder: {
    flexDirection: 'row',
    // justifyContent: 'space-around'
  },
  buttonTile: {
    borderWidth: 1,
    height: 60,
    width: 140,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTileText: {},

  //   Patient Title
  patientTitle: {
    flexDirection: 'row',
  },
  patientTitleText: {},
  patientTitleUnderline: {
    textDecorationLine: 'underline',
  },
});
