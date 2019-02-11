import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import firebase from 'react-native-firebase';
import Dashboard from './screens/Dashboard';
import Landing from './screens/Landing';

const AppNavigator = createStackNavigator(
  {
    Dashboard,
    Landing
  },
  {
    initialRouteName: 'Dashboard',
  });

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  state = {
    email: '',
    password: '',
    user: null,
    username: '',
  }

  componentDidMount() {
    this.firestoreUsers = firebase.firestore().collection('users');
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  createAccountAndSetupUser = ({ email, password, username }) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredentials) => {
      if(userCredentials.user) {
        userCredentials.user.updateProfile({
          displayName: `${username.charAt(0).toUpperCase()}${username.substr(1)}`
        })
      }
    });
    this.firestoreUsers.doc(email).set();
  }

  inputEmail = (email) => {
    this.setState({
      email
    });
  }

  inputPassword = (password) => {
    this.setState({
      password
    });
  }

  inputUsername = (username) => {
    this.setState({
      username
    });
  }

  signOut = () => {
    firebase.auth().signOut();
  }

  render() {
    const { email, password, user, username } = this.state;
    const { displayName } = user === null ? '' : firebase.auth().currentUser;

    if (!user) {
      return (
        <Landing
          createAccountAndSetupUser={ this.createAccountAndSetupUser }
          username={ username }
          email={ email }
          inputEmail={ this.inputEmail }
          inputPassword={ this.inputPassword }
          inputUsername={ this.inputUsername }
          password={ password }
          signOut={ this.signOut }
        />
      )
    }

    return (
      <Dashboard
        displayName={ displayName }
        signOut={ this.signOut }
      />
    );
  }
}

export default App;
