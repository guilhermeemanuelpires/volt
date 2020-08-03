import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button } from "react-native";

import Main from "../view/main/index";
import Form from "../view/form/index";
import FormCli from "../view/formCliente/index";

const Drawer = createDrawerNavigator();

export default function MainRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Orçamento" component={Main} />
      <Drawer.Screen name="Form" component={Form} />
      <Drawer.Screen name="Formulários de Clientes" component={FormCli} />
    </Drawer.Navigator>
  );
}
