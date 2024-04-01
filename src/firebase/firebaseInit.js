import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDXa0aOZvifaEuczHoXRfTo_E2FYWn1zq8',
  authDomain: 'fireblogs-e3c3c.firebaseapp.com',
  projectId: 'fireblogs-e3c3c',
  storageBucket: 'fireblogs-e3c3c.appspot.com',
  messagingSenderId: '412668777476',
  appId: '1:412668777476:web:be5290406839b3ab3b5151',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
