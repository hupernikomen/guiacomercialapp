import React from "react";

import { View, Text } from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

function Routes() {

  const isAutenticator = false
  const loading = false

  return (

    isAutenticator ? <AppRoutes /> : <AuthRoutes />

  )
}

export default Routes