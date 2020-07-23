const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Promise resolved.");
        reject("Promise rejected");
    }, 3000);
});

console.log("Before");

promise.then((data) => {
    console.log("Resolve: ", data);
}).catch((data) => {
    console.log("Reject: ", data);
});

console.log("After");