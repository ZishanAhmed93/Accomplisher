import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBFGYyBDLU9jjfFDAhuUy6tybTnVGOv4jU",
    authDomain: "accomplisher-892e6.firebaseapp.com",
    databaseURL: "https://accomplisher-892e6.firebaseio.com",
    projectId: "accomplisher-892e6",
    storageBucket: "accomplisher-892e6.appspot.com",
    messagingSenderId: "185497260098"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;