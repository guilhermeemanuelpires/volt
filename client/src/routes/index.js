import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { Button, Image } from "react-native";
import Form from "../view/form/index";
import Main from "../view/main/index";
import Database from "../database/iniitDatabase";
import MainRoutes from "./Main.routes";
import React from "react";
import { DrawerActions } from "@react-navigation/native";

const Stack = createStackNavigator();

const MyCustomHeaderBackImage = () => (
  <Image
    source={require("../../assets/menu.png")}
    style={{ width: 40, height: 40, tintColor: "#fff" }}
  />
);
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../../assets/menu.png')}
    />
  );
}
export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Form"
      // screenOptions={{
      //   headerStyle: {
      //     backgroundColor: "#7159c1",
      //   },
      //   headerTitleStyle: { alignSelf: "center" },
      //   headerTintColor: "#ffff",

      // }}
    >
      <Stack.Screen
        name="Form"
        component={Form}
        options={({ navigation }) => ({
          title: "Volt Orçamento",
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.navigate("Main")}
              title="Info"
            />
          ),
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#1790EF",
            elevation: 0,
            shadowColor: "transparent",
          },
        })}
      />
      <Stack.Screen name="Database" component={Database} />
      <Stack.Screen
        name="Main"
        component={MainRoutes}
        options={({ navigation }) => ({
          title: "Volt Orçamento",
          headerBackImage: MyCustomHeaderBackImage,
          // headerTitle: props => <LogoTitle {...props} />,
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
             title="Info"
              
            />
          ),
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#1790EF",
            elevation: 0,
            shadowColor: "transparent",
          },
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
}
