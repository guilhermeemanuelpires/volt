import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Form from "../view/form/index";
import Main from "../view/main/index";
import MainRoutes from "./Main.routes";

const Stack = createStackNavigator();
export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
    >
      <Stack.Screen
        name="Form"
        component={Form}  
        options={{ title: 'Form' }}
      />
      <Stack.Screen
        name="Main"
        component={MainRoutes}
        options={{ title: 'Orçamento' }}
      />
          
    </Stack.Navigator>
  );
}

