import React, {Component} from 'react';
import {View} from 'react-native';
import Firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    Firebase.initializeApp({
      apiKey: 'AIzaSyB9HHs_4uG0MXAAqmlENwaXZp6S-u3OT78',
      authDomain: 'auth-328ef.firebaseapp.com',
      databaseURL: 'https://auth-328ef.firebaseio.com',
      projectId: 'auth-328ef',
      storageBucket: 'auth-328ef.appspot.com',
      messagingSenderId: '1084205224997',
      appId: '1:1084205224997:web:889c91acca1fcc5ad7dbcc',
      measurementId: 'G-8RQ2JT5NYL',
    });
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
