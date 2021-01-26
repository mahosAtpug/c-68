import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Instagram from "./screens/instagram";
import Facebook from "./screens/facebook";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from "react-navigation";

export default function App() {
  return (
    <AppContainer/>    
  );
}

const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator)


