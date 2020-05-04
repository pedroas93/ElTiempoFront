import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase-config'
import  { Redirect } from 'react-router-dom'


const firebaseApp = firebase.functions(firebaseConfig);

class Logout extends Component {

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
                ? <Redirect to='/M'  />
                : ''
            }
  
            {
              user
                ? <button onClick={signOut}>Sign out</button>
                : ''
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
})(Logout);