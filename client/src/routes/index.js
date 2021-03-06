import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { Button, Image, TouchableOpacity } from "react-native";
import FormCli from "../view/formCliente/index";
import formConfOrcamento from "../view/formConfOrcamento/index";
import database from "../view/formDatabase/index";
import pdf from "../AppContainer";
import qrcode from "../util/qrcode";
import MainRoutes from "./Main.routes";
import React from "react";
import { DrawerActions } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="FormCli"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0A7ABF",
        },
        headerTintColor: "#ffff",
      }}
    >
      <Stack.Screen
        name="FormCli"
        component={MainRoutes}
        options={({ navigation }) => ({
          title: "Volt Orçamento",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image
                source={require("../../assets/menu.png")}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          ),
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#0A7ABF",
            elevation: 0,
            shadowColor: "transparent",
          },
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="formConfOrcamento"
        component={formConfOrcamento}
        options={({ navigation }) => ({
          title: "Volt Orçamento",
          backgroundColor: "#0A7ABF",
        })}
      />
      <Stack.Screen
        name="database"
        component={database}
        options={({ navigation }) => ({
          title: "Volt Orçamento",
          headerTitleAlign:"center",
          headerLeft: () => (
            <Image
            // source={require("../../assets/menu.png")}
            style={{ width: 50, height: 50, backgroundColor: "#0A7ABF" }}
          />
          ),
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#0A7ABF",
            elevation: 0,
            shadowColor: "transparent",
          },
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="qrcode"
        component={qrcode}
        options={({ navigation }) => ({
          title: "Volt Orçamento",
          backgroundColor: "#0A7ABF",
        })}
      />
      <Stack.Screen
        name="pdf"
        component={pdf}
        options={({ navigation }) => ({
          title: "Volt Orçamento",
          backgroundColor: "#0A7ABF",
        })}
      />
    </Stack.Navigator>
  );
}
