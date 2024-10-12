// Import the Firebase scripts required for messaging
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDutd98WO0ike3CigItDjWZqEZ3X0ayG4A",
  authDomain: "coreorganizzprova1.firebaseapp.com",
  projectId: "coreorganizzprova1",
  storageBucket: "coreorganizzprova1.appspot.com",
  messagingSenderId: "794854416953",
  appId: "1:794854416953:web:6a0f71198c938b761b63e8",
  measurementId: "G-LT16P689DQ"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
