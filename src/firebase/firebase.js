import firebase from 'firebase'
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDYzOK_B_ChKy5KiRZ9ZTonFT15V0CLlxY",
    authDomain: "budgetapp-10e85.firebaseapp.com",
    databaseURL: "https://budgetapp-10e85-default-rtdb.firebaseio.com",
    projectId: "budgetapp-10e85",
    storageBucket: "budgetapp-10e85.appspot.com",
    messagingSenderId: "20095522776",
    appId: "1:20095522776:web:e06b05ac471eea4a4d84ad",
    measurementId: "G-JC26KPQZF7"
  };

  firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

database.ref().set({
  name:'Leo',
  age:'22',
  location:{
    city:'coro',
    avenue:'ramon a',
    house:'14'
  }
}).then(()=>{
  console.log('Se envio la data')
}).catch((e)=>{
  console.log('Hubo un error',e)
})

database.ref('age').set(28)
database.ref('location/city').set("pf")
database.ref('attributes').set({
  height:'177',
  weight:"60"
})


export {firebase, database as default};