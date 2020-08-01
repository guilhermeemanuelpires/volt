import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "../view/main/index";
import Form from "../view/form/index";

const Drawer = createDrawerNavigator();

export default function MainRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Form" component={Form} />
    </Drawer.Navigator>
  );
}
