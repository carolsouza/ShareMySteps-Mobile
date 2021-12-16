import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="CreateAccount" component={CreateAccount} />
    </Navigator>
  );
}
