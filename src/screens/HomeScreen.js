import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import HomeComponent from './HomeComponent';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#1bb1ac'}}
      tabBarOptions={{ style: {height:100}, showIcon: true, showLabel: false, style: {height: 100} }}
      >
      <Tab.Screen
        name="Home6"
        component={HomeComponent}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="circle" type="entypo" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home2"
        component={HomeComponent}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="message1" type="antdesign" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home3"
        component={HomeComponent}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="news" type="entypo" color={color} />
          ),
        }}
        tabBarOptions={{showLabel: false}}
      />
      <Tab.Screen
        name="Home4"
        component={HomeComponent}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="medical-services" type="material" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home5"
        component={HomeComponent}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user-o" type="font-awesome" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default HomeScreen;
