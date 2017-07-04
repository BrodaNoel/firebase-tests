'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const express = require('express');
// Feature: CORS
const cors = require('cors')({origin: true});
const app = express();

// Feature: CORS
app.use(cors);

// Feature: Hello endpoint with authentication
// Express middleware that validates Firebase ID Tokens passed in the Authorization HTTP header.
// The Firebase ID token needs to be passed as a Bearer token in the Authorization HTTP header like this:
// `Authorization: Bearer <Firebase ID Token>`.
// when decoded successfully, the ID Token content will be added as `req.user`.
const validateFirebaseIdToken = (req, res, next) => {
  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer '))) {
    res.status(403).send({
      status: 'error',
      error: {
        id: 'app/token-needed',
        message: 'You need to send a Token'
      }
    });
    return;
  }

  const idToken = req.headers.authorization.split('Bearer ')[1];

  admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
    req.user = decodedIdToken;
    next();
  }).catch(error => {
    res.status(403).send({
      status: 'error',
      error: {
        id: 'app/token-invalid',
        message: 'You need to send a *valid* Token'
      }
    });
  });
};

// Feature: Hello endpoint with authentication
app.use(validateFirebaseIdToken);

// Feature: Hello endpoint with authentication
app.get('/sayHello', (req, res) => {
  res.send({
    data: 'Hello!'
  });
});

exports.api = functions.https.onRequest(app);
