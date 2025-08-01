//Object1.create;singleton method
// literals method
let mySym = Symbol("Himu");
let obj = {
  name: "Himy",
  age: 21,
  isAdult: true,
  [mySym]: "himuhero",
};
// console.log(typeof obj[mySym]);

// console.log(
//   `My name is ${obj.name} and my age is ${obj.age} and is i am adult ${obj.isAdult}`
// );
// for symbol datatypes we used []bracket to access as a symbol

// sinlgeton
// let user = Object();
// user.id = "abaie3e3";
// user.name = "Himu";
// console.log(user);

const user = {
  name: "Himy",
  age: 32,
  course: "btech",
};
const { course: co } = user;
// // object destructuring
console.log(co);
