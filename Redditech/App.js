import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/Login/LoginScreen.js';
import NavigatorScreen from './src/screens/MainContainer.js';
import HomeScreen from './src/screens/Home/HomeScreen.js';
import ProfileScreen from './src/screens/Profile/ProfileScreen.js';
import SearchScreen from './src/screens/Search/SearchScreen.js';
import SettingsScreen from './src/screens/Profile/SettingsScreen.js'
import MainContainer from './src/screens/MainContainer.js';

const Stack = createStackNavigator();

/*
* \fn App
* @brief Declare the page of the application using a NavigationContainer
* The first page is on the top of the list.
*/

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen}/>
        <Stack.Screen options={{ headerShown: false }} name="Settings" component={SettingsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Navigator" component={NavigatorScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Main" component={MainContainer} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

/*
* declare stylesheet to be use in App.js
*/

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});