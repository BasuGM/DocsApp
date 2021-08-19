import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon} from 'react-native-elements';

const OverlayScreen = () => {
  return (
    // <View style={styles.container}>
      <View style={styles.overlayHolder}>
        {/* Overlay Title  */}
        <View style={styles.overlayTitle}>
          <Text style={styles.overlayTitleText}>
            Private Video Call Request
          </Text>
        </View>

        {/* Doctor Tab  */}
        <View style={styles.doctorTab}>
          <View style={styles.doctorTabLeft}>
            {/* <View style={styles.doctorTabIcon}></View> */}
            <Image
              style={styles.doctorTabIcon}
              source={{
                uri: 'https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              }}
            />
          </View>
          <View style={styles.doctorTabRight}>
            <View style={styles.doctorTabName}>
              <Text style={styles.doctorTabNameText}>Ethel Howard</Text>
            </View>
            <View style={styles.doctorTabGenderAge}>
              <Text style={styles.doctorTabGenderText}>Female</Text>
              <Text style={styles.doctorTabAgeText}>28 years old</Text>
            </View>
            <View style={styles.doctorTabPhone}>
              <View style={styles.doctorTabPhoneIcon}>
                <Icon name="phone" type="entypo" color="#e54b79" size={20} />
              </View>
              <Text style={styles.doctorTabPhoneText}>542-430-3167</Text>
            </View>
          </View>
        </View>

        {/* Time Tab  */}
        <View style={styles.timeTab}>
          <View style={styles.timeTabSeconds}>
            <View style={styles.timeTabSecondsBox}>
              <View style={styles.timeTabSecondsTitle}>
                <Text style={styles.timeTabSecondsTitleText}>56</Text>
              </View>
            </View>
            <View style={styles.timeTabSecondsGreen}></View>
          </View>
          <View style={styles.timeTabTitle}>
            <Text style={styles.timeTabTitleText}>
              I'm not ready to consult.
            </Text>
            <Text style={styles.timeTabTitleUnderline}>Cancel Request</Text>
          </View>
        </View>

        {/* Button Holder  */}
        <View style={styles.buttonHolder}>
          <View style={styles.buttonTileDetail}>
            <Text style={styles.buttonTileDetailText}>View Detail</Text>
          </View>
          <View style={styles.buttonTileCall}>
            <Text style={styles.buttonTileCallText}>Call Now</Text>
          </View>
        </View>
      </View>
    // </View>
  );
};
export default OverlayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Overlay Holder
  overlayHolder: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 500,
    padding: 20,
    backgroundColor: '#fcfcfc',
    borderTopRightRadius: 40,
    borderTopLeftRadius:40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },

  // Overlay Title
  overlayTitle: {
    marginTop: 10
  },
  overlayTitleText: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },

  // Doctor Tab
  doctorTab: {
    marginTop: 20,
    flexDirection: 'row',
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#f6f6f6',
  },
  doctorTabLeft: {},
  doctorTabIcon: {
    borderWidth: 1,
    height: 80,
    width: 80,
    borderRadius: 30,
  },
  doctorTabRight: {
    marginHorizontal: 20,
    justifyContent: 'space-around',
  },
  doctorTabName: {},
  doctorTabNameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  doctorTabGenderAge: {
    flexDirection: 'row',
  },
  doctorTabGenderText: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 'bold',
  },
  doctorTabAgeText: {
    marginLeft: 20,
    color: 'grey',
    fontSize: 14,
  },
  doctorTabPhone: {
    flexDirection: 'row',
  },
  doctorTabPhoneIcon: {
    height: 20,
    width: 20,
  },
  doctorTabPhoneText: {
    marginLeft: 10,
  },

  // Time Tab
  timeTab: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeTabSeconds: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120
  },
  timeTabSecondsBox: {
    borderWidth: 12,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#3dcecd',
  },
  timeTabSecondsTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeTabSecondsTitleText: {
    fontSize: 48,
  },
  timeTabSecondsGreen: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#03d453'
  },
  timeTabTitle: {
    flexDirection: 'row',
  },
  timeTabTitleText: {
    color: 'black',
  },
  timeTabTitleUnderline: {
    marginLeft: 5,
    textDecorationLine: 'underline',
  },

  // Button Holder
  buttonHolder: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Login Button
  buttonTileDetail: {
    borderWidth: 1,
    height: 60,
    width: 140,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
  },
  buttonTileDetailText: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Sign Up Button
  buttonTileCall: {
    height: 60,
    width: 140,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#47d7d7',
  },
  buttonTileCallText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
