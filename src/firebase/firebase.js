import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database()

export { firebase, database as default }

// database.ref('expenses')
// .on('value', (snapshot) => {
//   const expenses = []

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'test',
//   amount: 90000,
//   createdAt: 0
// })

// database.ref()
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val()
//   console.log('val', val)
// })
// .catch(() => {

// })
// database.ref().set({
//   name: 'Bopet',
//   age: 23,
//   isSingle: false,
//   location: {
//     city: 'San Diego',
//     country: 'United States'
//   }
// })

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('removed successfully')
//   })
//   .catch((e) => {
//     console.log('remove failed')
//   })
