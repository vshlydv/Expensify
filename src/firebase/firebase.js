import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAvOEGjqSCLnULL3AK_1xIrQTkJgymNE5o",
    authDomain: "expensify-f9ad0.firebaseapp.com",
    databaseURL: "https://expensify-f9ad0.firebaseio.com",
    projectId: "expensify-f9ad0",
    storageBucket: "expensify-f9ad0.appspot.com",
    messagingSenderId: "677857782739",
    appId: "1:677857782739:web:cf0b27b6debec5500edd26",
    measurementId: "G-TQEDJDX8QF"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref("expenses").on("child_changed", (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

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