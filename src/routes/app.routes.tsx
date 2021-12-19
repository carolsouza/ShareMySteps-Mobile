import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";
import Home from "../screens/Home";
import VideoCall from "../screens/VideoCall";
import Settings from "../screens/Settings";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="CreateAccount" component={CreateAccount} />
      <Screen name="Home" component={Home} />
      <Screen name="VideoCall" component={VideoCall} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
}
