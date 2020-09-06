import React, {Component} from 'react';
import {View} from 'react-native';
import Firebase from 'firebase';
import {Header, Button, Spinner, Card, CardSection} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn: null};

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

    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => Firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <Card>
            <CardSection>
              <Spinner size="large" />
            </CardSection>
          </Card>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
