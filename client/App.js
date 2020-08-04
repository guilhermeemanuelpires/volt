import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';


export default function volt() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Routes />
    </NavigationContainer>
  );
}
