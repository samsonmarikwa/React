import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCTOEEYdzXhEyEOF06c9vAPQziNYlhrNMY',
  authDomain: 'cooking-ninja-site-607ff.firebaseapp.com',
  projectId: 'cooking-ninja-site-607ff',
  storageBucket: 'cooking-ninja-site-607ff.appspot.com',
  messagingSenderId: '843921229551',
  appId: '1:843921229551:web:c5a68446cf626e526dfd1a',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
