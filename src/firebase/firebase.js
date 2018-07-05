import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })

// CHALLENGE
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })

// CHALLENGE
// database.ref('expenses').push({
//   description: 'rent',
//   note: '',
//   amount: 109500,
//   createdAt: 5432623543
// });

// database.ref('expenses').push({
//   description: 'phonebill',
//   note: '',
//   amount: 5900,
//   createdAt: 5432623543
// });

// database.ref('expenses').push({
//   description: 'food',
//   note: '',
//   amount: 1200,
//   createdAt: 5432623543
// });

// CREATING NEW DATA WITH UNIQUE IDs
// database.ref('notes').push({
//   title: 'to-do',
//   body: 'Go for a run'
// });

// CHALLENGE
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// })

// FETCHING THE DATA CONTINUOUSLY
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
//   }, (e) => {
//     console.log('Error with data fetching', e)
//   })

// setTimeout(() => {
//   database.ref('age').set(30)
// }, 3500)

// setTimeout(() => {
//   database.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//   database.ref('age').set(31)
// }, 10500)

// FETCHING THE DATA ONCE
// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })


// database.ref().set({
//   name: 'Grega Lasnibat',
//   age: 29,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   isSingle: true,
//   location: {
//     city: 'Ljubljana',
//     country: 'Slovenia',

//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('this failed', e);
// });

// UPDATING THE DATABASE
// database.ref().update({
//   name: 'Mike',
//   age: 200,
//   job: 'Software developer',
//   isSingle: null,
//   'location/city': 'Boston'
// });

// UPDATING CHALLENGE
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
//   'location/country': 'United States'
// })

// database.ref().set('This is my data')

// database.ref('age').set(30) // access only age

// database.ref('location/city').set('Amsterdam') // access deeper in the tree

// CHALLENGE
// database.ref('attributes').set({
//   height: 190,
//   weight: 76
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('Error: ', e);
// });

// console.log('I made a request to change the data')

// REMOVING FROM DATABASE
// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('Successfuly removed isSingle');
//   }).catch((e) => {
//     console.log('Error', e);
//   });

// ALTERNATIVE REMOVING
// database.ref('isSingle').set(null)