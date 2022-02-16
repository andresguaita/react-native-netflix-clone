import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../Screens/HomeScreen";
import { SearchScreen } from "../Screens/SearchScreen";
import { CommingScreen } from "../Screens/CommingScreen";
import { DownsloadsScreen } from "../Screens/DownsloadsScreen";
import { MoreScreen } from "../Screens/MoreScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();


export const Tabs = () => {
  return (

    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'black'
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#171717',
          borderWidth: 0,
          paddingBottom: 10,
          elevation: 0,
          height: 60,
        },
        tabBarIcon: ({ color, focused }) => {

          let iconName = '';
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline'
              break;

            case 'Search':
              iconName = 'search-outline'
              break;

            case 'Comming':
              iconName = 'albums-outline'
              break;

            case 'Downloads':
              iconName = 'arrow-down-outline'
              break;

            case 'More':
              iconName = 'list-outline'
              break;
          }

          return <Icon name={iconName} size={20} color={color} />
        }
      })}
    >
      <Tab.Screen name="Home" options={{ title: 'Home', headerShown: false }} component={Home} />
      <Tab.Screen name="Search" options={{ title: 'Search', headerShown: false, }} component={SearchScreen} />
      <Tab.Screen name="Comming" options={{ title: 'Comming Soon', headerShown: false, }} component={CommingScreen} />
      <Tab.Screen name="Downloads" options={{ title: 'Dowloads' , headerShown: false, }} component={DownsloadsScreen} />
      <Tab.Screen name="More" options={{ title: 'More' , headerShown: false,}} component={MoreScreen} />
    </Tab.Navigator>
  )

}