import * as firebase from "firebase";

import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyC3k3YGVsCspSXnaU8Hr01gdVZmtakUCkA",
  authDomain: "projeto-integrado-dev.firebaseapp.com",
  projectId: "projeto-integrado-dev",
  storageBucket: "projeto-integrado-dev.appspot.com",
  messagingSenderId: "45708041078",
  appId: "1:45708041078:web:e94df141b3861abed1f857",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();