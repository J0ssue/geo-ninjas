import firebase from 'firebase';
import firestore from 'firebase/firestore';
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyACYgaHun4l6o24OFXdq8kpfkLLFvcBG3o',
  authDomain: 'geo-ninjas-474ae.firebaseapp.com',
  databaseURL: 'https://geo-ninjas-474ae.firebaseio.com',
  projectId: 'geo-ninjas-474ae',
  storageBucket: 'geo-ninjas-474ae.appspot.com',
  messagingSenderId: '567710545063'
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
