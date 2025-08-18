// // we create method of any datetypes using objectprototype
// let hero = ["hanumanji", "bholenathji", "kanha"];
// let power = {
//   hanumanji: "gada",
//   bholenathji: "trishool",

//   kanha: "chakra",
//   getPower: function () {
//     console.log(`hanuman ji have ${this.hanumanji}`);
//   },
// };
// Object.prototype.printMe = function () {
//   console.log(`these are my fav`);
// };
// power.printMe();
// hero.printMe();

//another examples
let str = "Himanshu     ";
console.log(str.length);
String.prototype.count = function () {
  console.log(this);

  console.log(this.trim().length);
};
str.count();
