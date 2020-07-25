import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses")
//   .on("value", (snapShot) => {
//     var expenses = [];
//     snapShot.forEach((childSnapShot) => {
//         expenses.push({
//             id: childSnapShot.key,
//             ...childSnapShot.val()
//         });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").push({
//     descripton: "Rent",
//     note: "",
//     amount: 45000,
//     createdAt: 4632132464
// });


// const valueChange = database.ref().on("value", (snapShot) => {
//     const val = snapShot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// })

// setTimeout(() => {
//     database.ref("job/company").set("Google");
// }, 3500);

// setTimeout(() => {
//     database.ref().off("value", valueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref("job/company").set("Amazon");
// }, 10500);
// database.ref().once('value').then((snapShot) => {
//     console.log("data: ", snapShot.val());
// })

// database.ref().set({
//     name: "Vishal Yadav",
//     age: 21,
//     isSingle: true,
//     location: {
//         city: "Indore",
//         country: "India"
//     }
// }).then(() => {
//     console.log("Set successfully");
// }).catch((e) => {
//     console.log("Error: ", e);
// });

// database.ref("isSingle")
// .remove()
// .then(() => {
//     console.log("isSingle removed successfully");
// }).catch((e) => {
//     console.log("Error: ", e);
// })

// database.ref().update({
//     stressLeve: 9,
//     job: {
//         title: "Software developer",
//         company: "Amazon"
//     }
// }).then(() => {
//     console.log("Data updated successfully");
// })