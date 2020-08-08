import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Database from "../database/iniitDatabase";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FormCli from "../view/formCliente/index";

const Drawer = createDrawerNavigator();

export default function MainRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="FormCli"
        component={FormCli}
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
