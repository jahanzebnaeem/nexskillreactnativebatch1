import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyAOVjrNSZkp1m5cmfEsGlqaVcYwXfXBNL0',
      authDomain: 'managerapp-5c0b9.firebaseapp.com',
      databaseURL: 'https://managerapp-5c0b9.firebaseio.com',
      projectId: 'managerapp-5c0b9',
      storageBucket: 'managerapp-5c0b9.appspot.com',
      messagingSenderId: '626258158459',
      appId: '1:626258158459:web:7e42b6d9500720b3a753de',
      measurementId: 'G-G4BQH5TZWX',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics;
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Header headerText="Login" />
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
