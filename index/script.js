const firebaseConfig = {
    apiKey: "AIzaSyCt-UIiX4XYWyp6WCgor-uNA44WBZnI_Sw",
    authDomain: "site-pc-ff72d.firebaseapp.com",
    databaseURL: "https://site-pc-ff72d-default-rtdb.firebaseio.com",
    projectId: "site-pc-ff72d",
    storageBucket: "site-pc-ff72d.appspot.com",
    messagingSenderId: "617816063395",
    appId: "1:617816063395:web:43db1aa9cdbf0823436e16",
    measurementId: "G-M0Q90LDDTW"
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  // reference your database
  firebase.databaseURL().ref('')