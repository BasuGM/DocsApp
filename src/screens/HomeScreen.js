import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBarOptions={{showIcon: true}}>
      <Tab.Screen
        name="Home"
        component={HomeComponent}
        options={{
          tabBarIcon: tabInfo => (
            <Icon name="stepbackward" type="antdesign" color="#517fa4" />
          ),
        }}
      />
      <Tab.Screen
        name="Home2"
        component={HomeComponent}
        options={{
          tabBarIcon: tabInfo => (
            <Icon name="stepbackward" type="antdesign" color="#517fa4" />
          ),
        }}
      />
      <Tab.Screen
        name="Home3"
        component={HomeComponent}
        options={{
          tabBarIcon: tabInfo => (
            <Icon name="stepbackward" type="antdesign" color="#517fa4" />
          ),
        }}
      />
      <Tab.Screen
        name="Home4"
        component={HomeComponent}
        options={{
          tabBarIcon: tabInfo => (
            <Icon name="stepbackward" type="antdesign" color="#517fa4" />
          ),
        }}
      />
      <Tab.Screen
        name="Home5"
        component={HomeComponent}
        options={{
          tabBarIcon: tabInfo => (
            <Icon name="stepbackward" type="antdesign" color="#517fa4" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeComponent = ({navigation}) => {
  const TaskTab = () => {
    return (
      <View style={styles.taskTab}>
        <View style={styles.taskTabIcon}></View>
        <View style={styles.taskTabTitle}></View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text>WORKING HERE</Text> */}

      {/* Header  */}
      <View style={styles.header}>
        <View style={styles.headerIcon}></View>
        <View style={styles.headerMid}>
          <Text style={styles.headerMidTitle}>Hi Dr,</Text>
          <Text style={styles.headerMidTitle2}> How're you today? </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Overlay')}
          style={styles.headerNotification}></TouchableOpacity>
      </View>
      {/* <Text>WORKING HERE</Text> */}

      {/* Search Bar  */}
      <View style={styles.searchBarHolder}>
        <View style={styles.searchBar}>
          <View style={styles.searchBarIcon}></View>
          <Text style={styles.searchBarText}>Search Patient, health issue</Text>
        </View>
      </View>

      {/* Task for Today  */}
      <View style={styles.taskTile}>
        <View style={styles.taskTileLeft}>
          <Text style={styles.taskTileTitle}>Task for today</Text>
          <Text style={styles.taskTileSubtitle}> 5 of 9 completed </Text>
        </View>
        <View style={styles.taskTileRight}>
          <Text style={styles.taskNumber}> 5 </Text>
        </View>
      </View>

      {/* Task Tab  */}
      <View style={styles.taskTabMain}>
        <View style={styles.taskTabHolder}>
          <TaskTab />
          <TaskTab />
        </View>
        <View style={styles.taskTabHolder}>
          <TaskTab />
          <TaskTab />
        </View>
      </View>

      <Text>Material Tab</Text>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },

  //   Header
  header: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerIcon: {
    width: 60,
    height: 60,
    borderWidth: 1,
  },
  headerMid: {},
  headerMidTitle: {},
  headerMidTitle2: {},
  headerNotification: {
    width: 60,
    height: 60,
    borderWidth: 1,
  },

  //   Search Bar
  searchBarHolder: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    borderWidth: 1,
    height: 60,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  searchBarIcon: {
    width: 60,
    height: 60,
    borderWidth: 1,
  },
  searchBarText: {},

  //   Task for today
  taskTile: {
    borderWidth: 1,
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskTileLeft: {
    width: '80%',
  },
  taskTileRight: {},
  taskTileTitle: {},
  taskTileSubtitle: {},
  taskNumber: {},

  // Task Tab
  taskTabMain: {},
  taskTabHolder: {
    flexDirection: 'row',
  },
  taskTab: {
    borderWidth: 1,
    height: 140,
    width: 140,
    margin: 20,
  },
  taskTabIcon: {},
  taskTabTitle: {},
});
