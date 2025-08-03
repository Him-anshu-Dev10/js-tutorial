function addTwoNum(num1, num2) {
  //   console.log(num1 + num2);
  return num1 + num2;
}
let result = addTwoNum(5, 6);
// c onsole.log(result);

// fn ref    fncall

function loginMessage(username = "sonam") {
  if (!username) {
    // console.log("please enter a valid name ");
    return;
  }
  return `${username} just login`;
}
// let login = loginMessage("");
// console.log(loginMessage("himu"));

// rest operator
function CostPrice(...num1) {
  return num1;
}
// console.log(CostPrice(200, 500, 400, 800, 700));
// we can not directly access more than one value of arguments inside the function sso using rest operator is help us

// passing a object inside the fn
// let user = {
//   fullName: "Himanshu Pokhriyal",
//   age: 21,
// };
function handleObject(anyObj) {
  // console.log(
  //   `my name is ${anyObj.fullName} and my age is ${anyObj.age} years`
  // );
}
//handleObject(user);

// pass an array inside the fn
let arr = [4, 5, 8, 9, 8];
function Himu(getArr) {
  return getArr[2];
}

// console.log(Himu(arr));

// this keyword is use for current context

let user = {
  username: "Himy",
  age: 42,

  printMsg: function () {
    return `hello I am ${this.username} and i am ${this.age} year old`;
  },
};
// console.log(user.printMsg());

// iife immediate invoke functions expressions

(function () {
  console.log("hello");
})();

(() => {
  console.log("part twoss");
})();
