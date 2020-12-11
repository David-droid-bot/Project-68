import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import Facebook from "./Screens/fb";
import Instagram from "./Screens/in"

export default class App extends React.Component{
  render(){
    return <AppContainer/>
  }
}

const Tabnavigator=createBottomTabNavigator({
  Instagram: {screen: Instagram},
  Facebook: {screen: Facebook}
})

const AppContainer=createAppContainer(Tabnavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
