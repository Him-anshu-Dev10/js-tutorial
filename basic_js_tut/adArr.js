const arr = [1, 2, 3, 4, 5, 6];
const Arr = [7, 8, 9];
// for adding two Array first we use push then concat and then spread operator

// push
// arr.push(Arr);
// console.log(arr);
// it is not that optimatl because it add whole array in the existing array

// then we use concat method
//(beacause it return a new array)

// const newArr = arr.concat(Arr);
// console.log(newArr);

// but it is not effiecient way to merge more than two array
// so we use SPREAD operator

// const NewArr = [...arr, ...Arr];
// console.log(NewArr);

// let s1 = 45;
// let s2 = 34;
// let s3 = 332;
// console.log(Array.of(s1, s2, s3));
//for  converting variable in to array

// for converting  array into string
let newArr = Array.from("Himanshu");
console.log(typeof newArr);
