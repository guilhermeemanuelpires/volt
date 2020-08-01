import { createStackNavigator } from '@react-navigation/stack';
import Form from "../view/form/index";
import Main from "../view/main/index";
import MainRoutes from "./Main.routes";
import React from 'react';


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
        options={{ title: 'Main' }}
      />
    </Stack.Navigator>
  );
}

