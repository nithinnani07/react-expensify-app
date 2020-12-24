import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });            
//         });
//         console.log(expenses);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//     console.log(expenses);
// })

// database.ref('expenses').push({
//     description: 'Rent',
//     amount: 123,
//     createdAt: 123,
//     notes: 'My own rent'
// });

// database.ref('expenses').push({
//     description: 'Gas',
//     amount: 1290,
//     createdAt: -1000,
//     notes: 'My own gas'
// });

// database.ref('expenses').push({
//     description: 'Water',
//     amount: 5632,
//     createdAt: 0,
//     notes: 'My own water'
// });

//database.ref('notes/-MPEPbnzeucjeUB9pEOh').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React'
// });

// const firebaseNotes = {
//     notes: {

//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
// }, {
//     id: '20',
//     title: 'Second note',
//     body: 'This is my 2nd note'
// }];

// database.ref('notes').set(notes);


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());     
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('name').set('Nithin')
// }, 5000);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 10000);

// setTimeout(() => {
//     database.ref('name').set('Nittin')
// }, 15000);

// database.ref('attributes/height')
//     .once('value')
//     .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//     })
//     .catch((error) => {
//         console.log('Error Fetching Data', error);
//     });

// firebase.database().ref().set({
//     name: 'Nithin'
// });

// firebase.database().ref('attributes').set({
//     height: 150,
//     weight: 55
// }).then(() => {
//     console.log('Data is set');
// }).catch((error) => {
//     console.log('Error occured!', error);
// });

//remove
// firebase.database().ref('isSingle').remove().then(() => {
//     console.log('Data deletion successful');
// }).catch((error) => {
//     console.log('Error in data deletion', error);
// });

//remove
// firebase.database().ref('isSingle').set(null)

//update
// firebase.database().ref().update({
    
// });