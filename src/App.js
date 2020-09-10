import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './router';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/login-form';
import {Actions} from 'react-native-router-flux';

class App extends React.Component {
  state = {
    isAuth: false,
  };

  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyB8CcxElDHPAFvCcEF2vxec7s39MwzPHew',
        authDomain: 'test-1537512312523.firebaseapp.com',
        databaseURL: 'https://test-1537512312523.firebaseio.com',
        projectId: 'test-1537512312523',
        storageBucket: 'test-1537512312523.appspot.com',
        messagingSenderId: '612417014272',
        appId: '1:612417014272:web:d7eaf7203f820f26ec66e5',
      });
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        Actions.main();
      }
    });
  }

  onLogOutClick = () => firebase.auth().signOut();

  renderContent() {
    switch (this.state.isAuth) {
      case true:
        return (
          <View style={{marginTop: 30}}>
            <Button onPress={this.onLogOutClick}>Log out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{marginTop: 30}}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
        {/* <View>
          <Header title="Authentication" />
          {this.renderContent()}
        </View> */}
      </Provider>
    );
  }
}

export default App;
