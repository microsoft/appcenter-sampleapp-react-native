import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { WelcomeScreen } from './screens/welcomeScreen';
import { BuildScreen } from './screens/buildScreen';
import { TestScreen } from './screens/testScreen';
import { DistributeScreen } from './screens/distributeScreen';
import { CrashesScreen } from './screens/crashesScreen';
import { AnalyticsScreen } from './screens/analyticsScreen';
import { PushScreen } from './screens/pushScreen';

const RootTabNavigator = TabNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    Build: {
      screen: BuildScreen,
    },
    Test: {
      screen: TestScreen,
    },
    Distribute: {
      screen: DistributeScreen,
    },
    Crashes: {
      screen: CrashesScreen,
    },
    Analytics: {
      screen: AnalyticsScreen,
    },
    Push: {
      screen: PushScreen,
    },
  },
  {
    initialRouteName: 'Crashes',
    tabBarOptions: {
      style: {
        backgroundColor: "#252525"
      },      
    },
    navigationOptions:{
      tabBarVisible: false
    },
    lazy: false,
    
  }
);

export default class App extends Component {
  render() {
    return <RootTabNavigator />;
  }
}
