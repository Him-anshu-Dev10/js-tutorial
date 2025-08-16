// //for solving callback hell we use promise in js
// function getData(id, nextData) {
//   setTimeout(() => {
//     console.log(id);
//     if (nextData) {
//       nextData();
//     }
//   }, 2000);
// }
// getData(1, () => {
//   getData(2);
// });

function getData(id, nextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(id);
      resolve("success");
      if (nextData) {
        nextData();
      }
    }, 3000);
  });
}
getData(1)
  .then((res) => {
    console.log(res);
    return getData(2);
  })
  .then((res) => {
    console.log(res);
  });
