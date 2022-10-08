/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AddCar from './Screen/Components/AddCar';
import ViewCars from './Screen/Components/ViewCars';
import HomePage from './Screen/Components/HomePage';
import Login from './Screen/Components/Login';
import Register from './Screen/Components/Register';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AddCar" component={AddCar} />
        <Stack.Screen name="ViewCars" component={ViewCars} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles=StyleSheet.create({
  text:{
    color:'red',
    fontSize:30
  }
})

export default App;
