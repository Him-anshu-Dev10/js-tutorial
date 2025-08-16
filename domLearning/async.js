// console.log("one");
// console.log("two");
// setTimeout(() => {
//   console.log("hello");
// }, 4000);
// console.log("himanshu");
// in this code all console statement are print before set timeout so its shows async behaviour of js

// callback when we pass a function as a argument in another fn is know as callback,

// setTimeout(() => {
//   console.log("hello");
// }, 4000);
// hello fn inside settimeout fn
//when we want to log some data after some time log another data

// function getData(id) {
//   setTimeout(() => {
//     console.log(id);
//   }, 2000);
// }
// getData(2);
// getData(3);

// in this fn both are taking 2 min but run simultaneously so it is not expected

// we want 1 data then after second data

function getData(id, nextId) {
  setTimeout(() => {
    console.log(id);
    if (nextId) {
      nextId();
    }
  }, 2000);
}
getData(2, () => {
  console.log("wait for next");

  getData(3, () => {
    console.log("wait for next");
    getData(1);
  });
});

// call back hell (pyramid doom)= this example shows callback inside cal back so it is known as callback hell

//for solving this problem we use promises
