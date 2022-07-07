import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { WelcomeScreen } from "./screens/welcomeScreen";
import { BuildScreen } from "./screens/buildScreen";
import { TestScreen } from "./screens/testScreen";
import { DistributeScreen } from "./screens/distributeScreen";
import { CrashesScreen } from "./screens/crashesScreen";
import { AnalyticsScreen } from "./screens/analyticsScreen";
import { CodePushScreen } from "./screens/codePushScreen";
import "react-native-gesture-handler";

const Tab = createMaterialTopTabNavigator();

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={() => null}
        screenOptions={{
          lazy: false,
          swipeEnabled: true,
        }}>
        <Tab.Screen name="Home" component={WelcomeScreen} />
        <Tab.Screen name="Settings" component={BuildScreen} />
        <Tab.Screen name="Test" component={TestScreen} />
        <Tab.Screen name="CodePush" component={CodePushScreen} />
        <Tab.Screen name="Distribute" component={DistributeScreen} />
        <Tab.Screen name="Crashes" component={CrashesScreen} />
        <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
