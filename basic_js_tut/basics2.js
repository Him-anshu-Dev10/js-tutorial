// when u try to compare null with any value than null automatically convert into the number
// undefined give always false to comparing
console.log(true > "");
console.log(false > null);

// memory management in java script

// ------------//  for primitive stack is used
// +++++++++++++++++// for non primitive heap is used

let one = 5;
let two = one;
two = 6;

// console.log(one);
// console.log(two);

// that's means when we want to a variabel available in memory  then we have a copy of the present variable

// heap management
let kalu = {
  email: "himu@gamil.com",
  upi: "himu.ybl",
};
let ramu = kalu;
ramu.email = "kanu@gmail.com";
console.table([kalu.email, ramu.email]);

// if we access not primitive data types in js so we provide a refrence of current variable
// sp when we change the refrencing variabel it change present variable that \\

//summery
// when we change in primitive data types the copy of the variable is changed
// but when we change in non primitive data types it changes in actual value ///

//String

// const newGame = new String("Himanshu");
