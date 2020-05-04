import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase-config'
import { Redirect } from 'react-router-dom'


const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {


  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;


    return (
      <div>
        {
          user
            ? <Redirect to='/shop' />
            : user
        }

        {
          user
            ? <button onClick={signOut}>Sign out</button>
            : <button onClick={signInWithGoogle} className="btn btn-primary btn-top">Sign in with Google</button>
        }
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);