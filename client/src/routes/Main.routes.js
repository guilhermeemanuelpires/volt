import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button } from "react-native";
import Form from "../view/form/index";
import Database from "../database/index";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FormCli from "../view/formCliente/index";

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
        name="Atualizar parametro"
        component={Database}
        options={{
          drawerIcon: ({ size }) => (
            <MaterialCommunityIcons name="refresh" color="#000" size={size} />
          ),
        }}
      />
      <Drawer.Screen name="Form" component={Form} />
      <Drawer.Screen name="Formulários de Clientes" component={FormCli} />
    </Drawer.Navigator>
  );
}
