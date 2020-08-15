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
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Write your own component
const App = () => {
  return (
    <View>
      <Header headerText={'Album'} />
      <AlbumList />
    </View>
  );
};

// Display the component
AppRegistry.registerComponent('albums', () => App);
