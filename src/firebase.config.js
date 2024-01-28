import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB5lRKiWbf_D0si1YcB_nFByeNrqM29KgI",
  authDomain: "resturantapp-47101.firebaseapp.com",
  databaseURL: "https://resturantapp-47101-default-rtdb.firebaseio.com",
  projectId: "resturantapp-47101",
  storageBucket: "resturantapp-47101.appspot.com",
  messagingSenderId: "813533034206",
  appId: "1:813533034206:web:0f7794c4e921ec7cd8344f",
};

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};