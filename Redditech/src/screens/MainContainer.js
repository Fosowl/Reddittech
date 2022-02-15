
import * as React from 'react';
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Home/HomeScreen';
import SearchScreen from './Search/SearchScreen';
import ProfileScreen from './Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

/*
* \fn MainContainer
* @brief generare tabNavigator design
* @params route > used to retrieve connection token obtained on login.
* @params navigation > used to import the bottom navigator into the page.VyV
*/

const MainContainer = ({route, navigation}) => {
    const token = route.params.token;
    console.log("TOKEN", token)
    return (
        <Tab.Navigator
            initialRouteName = {"Home"}
            tabBarOptions = {{
                activeTintColor: '#47D704',
                inactiveTintColor: 'lightgrey',
                activeBackgroundColor: '#272727',
                inactiveBackgroundColor: '#272727',
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let screen = route.name;
                    if (screen === "Home") {
                        Url = require('../../assets/home.png');
                    } else if (screen === "Profile") {
                        Url = require('../../assets/default_user.png');
                    } else if (screen === "Search") {
                        Url = require('../../assets/search.png');
                    }
                    return (<Image
                            source={Url}
                            style={{ width: 30, height: 30, tintColor: color }}
                        />)
                    },
                }
            )}
        >

        <Tab.Screen options = {{ headerShown: false }} name = "Home" component = {HomeScreen} initialParams={{token}} />
        <Tab.Screen options = {{ headerShown: false }} name = "Search" component = {SearchScreen} initialParams={{token}}/>
        <Tab.Screen options = {{ headerShown: false }} name = "Profile" component = {ProfileScreen} initialParams={{token}}/>


        </Tab.Navigator>
  );
}

export default MainContainer
