import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAwwbbBeugOrS4opdCkioxfkwGN9CZdfAQ',
  authDomain: 'simple-reactfire.firebaseapp.com',
  databaseURL: 'https://simple-reactfire.firebaseio.com',
  projectId: 'simple-reactfire',
  storageBucket: 'simple-reactfire.appspot.com',
  messagingSenderId: '417545407409',
  appId: '1:417545407409:web:69f753a8af31abf08ecb90',
  measurementId: 'G-MQ7J7GT9SE',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
