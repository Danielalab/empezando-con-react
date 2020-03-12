import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfy7-3z_WP6_Ie6EB4F0lT23yA9ujw_0M",
  authDomain: "burger-queen-5d0a6.firebaseapp.com",
  databaseURL: "https://burger-queen-5d0a6.firebaseio.com",
  projectId: "burger-queen-5d0a6",
  storageBucket: "burger-queen-5d0a6.appspot.com",
  messagingSenderId: "564153576812",
  appId: "1:564153576812:web:8291aec63100a7a8845749"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
