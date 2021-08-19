import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Image  */}
      <View style={styles.image}>
        <Image style={styles.imageImg} source={{uri: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}}  />
        <Text style={styles.imageText1}>Help millions of people</Text>
        <Text style={styles.imageText2}>everywhere, everytime!</Text>
      </View>

      {/* Bottom Part  */}
      <View style={styles.bottomPart}>
        {/* Image Slider  */}
        <View style={styles.imageSlider}>
          <View style={styles.imageSliderDotFirst}></View>
          <View style={styles.imageSliderDot}></View>
          <View style={styles.imageSliderDot}></View>
          <View style={styles.imageSliderDot}></View>
        </View>

        {/* Button Holder  */}
        <View style={styles.buttonHolder}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
           style={styles.buttonTileLogin}>
            <Text style={styles.buttonTileLoginText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.buttonTileSignUp}>
            <Text style={styles.buttonTileSignUpText}> Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.patientTitle}>
          <Text style={styles.patientTitleText}>Are you a patient? </Text>
          <Text style={styles.patientTitleUnderline}>Get Here! </Text>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#47d7d7',
  },

  //   Image
  image: {
    width: '100%',
    height: '65%',
    borderBottomLeftRadius: 60,
  },
  imageImg:{
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 60,
  },
  imageText1: {
    position: 'absolute',
    fontSize: 22,
    bottom: 60,
    left: 30,
  },
  imageText2: {
    position: 'absolute',
    fontSize: 22,
    bottom: 30,
    left: 30,
  },

  // Bottom Part
  bottomPart: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 30,
  },

  imageSlider: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 160,
  },
  imageSliderDotFirst: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  imageSliderDot: {
    width: 5,
    height: 5,
    backgroundColor: 'white',
    borderRadius: 2.5,
  },

  //   Button Holder
  buttonHolder: {
    flexDirection: 'row',
  },

  // Login Button
  buttonTileLogin: {
    borderWidth: 1,
    height: 60,
    width: 140,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
  buttonTileLoginText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Sign Up Button
  buttonTileSignUp: {
    height: 60,
    width: 140,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonTileSignUpText: {
    color: '#47d7d7',
    fontSize: 18,
    fontWeight: 'bold',
  },

  //   Patient Title
  patientTitle: {
    flexDirection: 'row',
  },
  patientTitleText: {
    color: 'white',
    fontSize: 16,
  },
  patientTitleUnderline: {
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
