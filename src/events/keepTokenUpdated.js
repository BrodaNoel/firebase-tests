import firebase from 'firebase';
import utils from 'utils';

// Keep firebase token updated
export default {
  apply: () => {
    firebase.auth().onIdTokenChanged(function(user) {
      if (user) {
        user.getIdToken().then(token => {
          utils.storage.local.save('firebaseToken', token);
        });
      } else {
        utils.storage.local.save('firebaseToken', null);
      }
    })
  }
};
