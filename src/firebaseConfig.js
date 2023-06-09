import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDc0k2PsmYI6_F44s1w4NN0hYoInA27SPg",
  authDomain: "placementmanagement-a620d.firebaseapp.com",
  projectId: "placementmanagement-a620d",
  storageBucket: "placementmanagement-a620d.appspot.com",
  messagingSenderId: "1080962437231",
  appId: "1:1080962437231:web:87deefaa5103e5fed0bd9a",
  measurementId: "G-MTSFBXRX96",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase };
