// This import loads the firebase namespace along with all its type information.
import * as firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkyY55TwM3yv23fvJzvBHppTvy8yBptb0",
  authDomain: "notes-43b28.firebaseapp.com",
  databaseURL: "https://notes-43b28.firebaseio.com",
  projectId: "notes-43b28",
  storageBucket: "notes-43b28.appspot.com",
  messagingSenderId: "258443025878",
  appId: "1:258443025878:web:084810656673829b6f9877"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
