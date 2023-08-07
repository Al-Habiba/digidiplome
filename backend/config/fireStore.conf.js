// Import the functions you need from the SDKs you need
const admin= require('firebase-admin')
const serviceAccount=require('./serviceAccount.json')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//location:nam5(us-central)


// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket:"digidiplome.appspot.com"
})

const storageBucket=admin.storage().bucket()
module.exports=storageBucket;

/*{"apiKey": "AIzaSyBu0xE7bTuvJtP-DXtUKPxThmsz8NK1cI0",
  "authDomain": "digidiplome.firebaseapp.com",
  "projectId": "digidiplome",
  "storageBucket": "digidiplome.appspot.com",
  "messagingSenderId": "829611536746",
  "appId": "1:829611536746:web:1950085f2f427176247513",
  "measurementId": "G-93QPY185HR"}*/