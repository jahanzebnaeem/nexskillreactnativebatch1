// Original code
/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);
// End of Original code

// Import component to use is the app
import React from 'react';
import {Text, AppRegistry} from 'react-native';

// Write your own component
const App = () => {
  return <Text>Hello Batch 01</Text>;
};

// Display the component
AppRegistry.registerComponent('albums', () => App);
