import React, { useState } from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FormCli from "../view/formCliente/index";
import Database from "../database/innitconnection"
import { DatabaseConnection } from '../database/connection';

const Drawer = createDrawerNavigator();
const Content = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View 
      style={{ alignItems:"center" }}
      >
      <Image
      source={require("../../assets/volt.png")}
      style={{ width: 250, height: 100}}
    />
    </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    
  );
};

export default function MainRoutes() {
  return (
    <Drawer.Navigator drawerContent={Content}>
      <Drawer.Screen
        name="Tela Inicial"
        component={FormCli}
        options={{
          drawerIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" color="#000" size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Atualizar Dados"
        component={FormDatabase}

        options={{
          drawerIcon: ({ size }) => (
            <MaterialCommunityIcons name="refresh" color="#000" size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
