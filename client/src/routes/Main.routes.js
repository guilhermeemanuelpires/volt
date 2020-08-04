import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "../view/main/index";
import Form from "../view/form/index";
import Database from "../database/index";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

export default function MainRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{
          drawerIcon: ({ size }) => (
            <MaterialCommunityIcons name="logout" color="#000" size={size} />
          )
        }}
      />
      <Drawer.Screen
        name="Database"
        component={Database}
        options={{
          drawerIcon: ({ size }) => (
            <MaterialCommunityIcons name="refresh" color="#000" size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
