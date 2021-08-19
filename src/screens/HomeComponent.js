import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {Icon, Overlay} from 'react-native-elements';
import OverlayScreen from './OverlayScreen';
import Calender from '../../assets/images/calender.png';
import Mobile from '../../assets/images/mobile.png';
import Messages from '../../assets/images/messages.png';
import Folder from '../../assets/images/folder.png';

const HomeComponent = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const TaskTab = ({title1, title2, image}) => {
    return (
      <TouchableOpacity onPress={toggleOverlay} style={styles.taskTab}>
        <View style={styles.taskTabIcon}>
          <Image style={styles.headerIcon} source={image} />
        </View>
        <View style={styles.taskTabTitle}>
          <Text style={styles.taskTabTitleText}>{title1}</Text>
          <Text style={styles.taskTabTitleText}>{title2}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header  */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Image
            style={styles.headerIcon}
            source={{
              uri: 'https://images.unsplash.com/photo-1592225924255-31de2f8d8abe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
            }}
          />
        </View>
        <View style={styles.headerMid}>
          <Text style={styles.headerMidTitle}>Hi Dr,</Text>
          <Text style={styles.headerMidTitle2}> How're you today? </Text>
        </View>
        <TouchableOpacity
          onPress={toggleOverlay}
          style={styles.headerNotification}>
          <Icon name="bell-o" type="font-awesome" color={'#f6466c'} size={24} />
          <View style={styles.headerNotificationTop}>
            <Text style={styles.headerNotificationTopText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Search Bar  */}
      <View style={styles.searchBarHolder}>
        <View style={styles.searchBar}>
          <View style={styles.searchBarIcon}>
            <Icon name="search" type="font-awesome" color={'grey'} size={32} />
          </View>
          <TextInput
            style={{width: '100%', height: '100%', fontSize: 16}}
            placeholder="Search Patient, health issue, ..."
            placeholderTextColor="grey"
          />
        </View>
      </View>

      {/* Task for Today  */}
      <View style={styles.taskTile}>
        <View style={styles.taskTileLeft}>
          <Text style={styles.taskTileTitle}>Task for today</Text>
          <Text style={styles.taskTileSubtitle}> 5 of 9 completed </Text>
        </View>
        <TouchableOpacity onPress={toggleOverlay} style={styles.taskTileRight}>
          <Text style={styles.taskNumber}> 5 </Text>
        </TouchableOpacity>
      </View>

      {/* Task Tab  */}
      <View style={styles.taskTabMain}>
        <View style={styles.taskTabHolder}>
          <TaskTab title1="Schedule" image={Calender} />
          <TaskTab title1="Consult History" image={Mobile} />
        </View>
        <View style={styles.taskTabHolder}>
          <TaskTab title1="Patient" title2="Management" image={Folder} />
          <TaskTab title1="FreeConsults" title2="150+ new" image={Messages} />
        </View>
      </View>

      <Overlay
        overlayStyle={styles.overlay}
        style={{marginTop: 100}}
        isVisible={visible}
        onBackdropPress={toggleOverlay}>
        <OverlayScreen />
      </Overlay>
    </View>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
  },

  //   Header
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  headerIcon: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  headerMid: {
    paddingLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  headerMidTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  headerMidTitle2: {
    fontSize: 18,
  },
  headerNotification: {
    width: 50,
    height: 50,
    borderRadius: 15,
    elevation: 5,
    backgroundColor: '#fffdfd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerNotificationTop: {
    position: 'absolute',
    height: 20,
    width: 20,
    borderRadius: 10,
    top: -5,
    right: -5,
    backgroundColor: '#f6466c',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  headerNotificationTopText: {
    color: 'white',
  },

  //   Search Bar
  searchBarHolder: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    borderColor: 'grey',
    elevation: 5,
    height: 60,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
  },
  searchBarIcon: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarText: {
    borderWidth: 1,
    flex: 1,
  },

  //   Task for today
  taskTile: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  taskTileLeft: {
    height: '100%',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  taskTileRight: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  taskTileTitle: {
    fontSize: 28,
  },
  taskTileSubtitle: {
    fontSize: 16,
  },
  taskNumber: {
    color: '#4ea6a5',
    textDecorationLine: 'underline',
    fontSize: 56,
  },

  // Task Tab
  taskTabMain: {},
  taskTabHolder: {
    flexDirection: 'row',
  },
  taskTab: {
    height: 140,
    width: 140,
    margin: 20,
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskTabIcon: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskTabTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskTabTitleText: {
    fontSize: 16,
    color: 'grey',
  },

  //   Overlay
  overlay: {
    width: '100%',
    height: 500,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
