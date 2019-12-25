import * as React from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator, createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { WelcomeScreen } from "./screens/welcomeScreen";
import { BuildScreen } from "./screens/buildScreen";
import { TestScreen } from "./screens/testScreen";
import { DistributeScreen } from "./screens/distributeScreen";
import { CrashesScreen } from "./screens/crashesScreen";
import { AnalyticsScreen } from "./screens/analyticsScreen";
import { PushScreen } from "./screens/pushScreen";
import { CodePushScreen } from "./screens/codePushScreen";
import "react-native-gesture-handler";

const BuildStack = createStackNavigator({ screen: BuildScreen });
const TestStack = createStackNavigator({ screen: TestScreen });
const CodePushStack = createStackNavigator({ screen: CodePushScreen });
const DistributeStack = createStackNavigator({ screen: DistributeScreen });
const CrashesStack = createStackNavigator({ screen: CrashesScreen });
const AnalyticsStack = createStackNavigator({ screen: AnalyticsScreen });
const PushStack = createStackNavigator({ screen: PushScreen });
const RootStack = createMaterialTopTabNavigator(
  {
    Welcome: WelcomeScreen,
    Build: BuildStack,
    Test: TestStack,
    CodePush: CodePushStack,
    Distribute: DistributeStack,
    Crashes: CrashesStack,
    Analytics: AnalyticsStack,
    Push: PushStack
  },
  {
    initialRouteName: "Welcome",
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "#252525"
      }
    },
    navigationOptions: {
      tabBarVisible: false
    },
    lazy: false,
    swipeEnabled: true
  }
);
const AppContainer = createAppContainer(RootStack);

export default AppContainer;
