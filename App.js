/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet } from 'react-native';
import HomePage from './Screen/Components/HomePage';
import Login from './Screen/Components/Login';
import Register from './Screen/Components/Register';

function App(){
  return(
       <Login/>
  );
}

const styles=StyleSheet.create({
  text:{
    color:'red',
    fontSize:30
  }
})

export default App;
