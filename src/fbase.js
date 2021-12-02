import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import apikey from './apikey.js';

const firebaseConfig = {
  apiKey: apikey.REACT_APP_FIREBASE_API_KEY,
  authDomain: apikey.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: apikey.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: apikey.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: apikey.REACT_APP_FIREBASE_MESSAGINGSENDER_ID,
  appId: apikey.REACT_APP_FIREBASE_APP_ID,
  measurementId: apikey.REACT_APP_FIREBASE_MEASUREMENT_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();