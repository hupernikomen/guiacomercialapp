import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Feed from "../pages/feed";

const Stack = createNativeStackNavigator()

function AppRoutes() {
  return (

    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  )
}

export default AppRoutes