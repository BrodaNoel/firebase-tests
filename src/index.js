import { shim } from 'promise.prototype.finally';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
import keepTokenUpdated from 'events/keepTokenUpdated';

// polyfil
shim();

// Feature: Init Firebase
var config = {
  apiKey: "AIzaSyDMc_FXTVNCIZ-Gik9ccrzpoMgcEIxxzfs",
  authDomain: "fir-tests-f81de.firebaseapp.com",
  databaseURL: "https://fir-tests-f81de.firebaseio.com",
  projectId: "fir-tests-f81de",
  storageBucket: "fir-tests-f81de.appspot.com",
  messagingSenderId: "431141611990"
};

firebase.initializeApp(config);

// Feature: Keep Firebase Token Updated
keepTokenUpdated.apply();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
