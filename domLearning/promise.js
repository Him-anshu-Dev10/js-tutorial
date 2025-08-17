// // // //for solving callback hell we use promise in js
// // // function getData(id, nextData) {
// // //   setTimeout(() => {
// // //     console.log(id);
// // //     if (nextData) {
// // //       nextData();
// // //     }
// // //   }, 2000);
// // // }
// // // getData(1, () => {
// // //   getData(2);
// // // });

// // function getData(id, nextData) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       console.log(id);
// //       resolve("success");
// //       if (nextData) {
// //         nextData();
// //       }
// //     }, 3000);
// //   });
// // }
// // getData(1)
// //   .then((res) => {
// //     console.log(res);
// //     return getData(2);
// //   })
// //   .then((res) => {
// //     console.log(res);
// //   });

// // new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     console.log("hello");
// //     resolve({ userName: "Himanshu", age: 32 }); // we can pass data inside the resolve

// //   }, 2000);
// // }).then((res) => {
// //   console.log(res);
// // });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (error) {
//       reject("Someting creating an error");
//     } else {
//       console.log("success");
//       resolve("yea it is runnig");
//     }
//   }, 2000);
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
