import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import utils from 'utils';

class LoginWithTwitter extends React.Component {
  static propTypes = {
    changeRoute: PropTypes.func.isRequired
  };

  login = () => {
    const provider = new firebase.auth.TwitterAuthProvider();

    firebase.auth().signInWithPopup(provider).then(result => {
      result.user.getIdToken().then(token => {
        // token: Firebase Token, used to authenticate the functions calls from frontend to firebase-backend
        // result.user: Twitter-User data
        // result.credential: Twitter-User credentials (token and secret), useful to make call to Twitter API in behalf of the user
        utils.storage.local.save('firebaseToken', token);

        this.props.changeRoute('Options');
      });

    }).catch(error => {
      console.log('error', `${error.code}: ${error.message}`)
    });
  }

  goBack = () => {
    this.props.changeRoute('Options');
  };

  render() {
    return (
      <div className="LoginWithTwitter">
        <h2>Login With Twitter</h2>
        <div>
          <button onClick={this.login}>Login</button>
          <button onClick={this.goBack}>Go Back</button>
        </div>
      </div>
    );
  }
}

export default LoginWithTwitter;
