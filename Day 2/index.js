//  const myPromise = new Promise((resolve,error)=>{
//     console.log(`Promise-Pending`);
//     setTimeout(()=>{
//         console.log(`Resolved Succesfully`);
//         resolve(`Abdullah Falak`)
//         error(`Hatt pencho`)
//     },2000)
// })
// myPromise.then((res)=>{
//     console.log(res);
// })
// myPromise.catch((reject)=>{
//     console.log(reject);
// })
// const pizzaOrder = new Promise((resolve, reject) => {
//     console.log(`pending`);
//     setTimeout(() => {
//         // const success = true
//         // if(success) {
//             resolve("Pizza ready hai! 🍕")  // ✅
//         // } else {
//             reject("Pizza nahi bana ❌")     // ❌
//             // }
//         }, 2000)
// })
// pizzaOrder.then((res)=>{
//     console.log(res);
// }).catch((reject)=>{
//     console.log(reject);
// })
// Task 1 
// const Tea = new Promise((resolved)=>{
//     console.log(`Ordered a Tea`);
//     setTimeout(()=>{
//         resolved(`Tea is ready.`);
//     },1000)
// })
// Tea.then((res)=>{
//     console.log(res);
// })
// Task 2 
// const Tea = new Promise((resolved,Rejected)=>{
//     console.log(`Ordered a Tea`);
//     setTimeout(()=>{
//         // resolved(`Tea is ready.`);
//         Rejected(Error(`The tea is burnt`))
//     },1000)
// })
// Tea.then((res)=>{
//     console.log(res);
// }).catch((rject)=>{
//     console.log(rject);
// })
/// random chance task 3 
var random = new Promise(function (resolve, reject) {
    console.log("Pending");
    setTimeout(function () {
        if (Math.random() > 0.4) {
            resolve("Got it");
        }
        else {
            reject(Error("Nothing got"));
        }
    }, 2000);
});
random
    .then(function (res) {
    console.log(res);
})
    .catch(function (err) {
    console.log(err);
});
