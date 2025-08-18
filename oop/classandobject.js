// function User(username, age, isloggenin) {
//   this.username = username;
//   this.age = age;
//   this.isloggenin = isloggenin;
// }
// let user1 = new User("himu", 21, true);
// let user2 = new User("radha", 21, true);
// console.log(user1, user2);
// new key word always create a new instance of the user if we not write new user 2 override the vale of user1

function user(username, age) {
  this.username = username;
  this.age = age;
}

user.prototype.printme = function () {
  this.age++;
  console.log(this.age);
};
const user1 = new user("himu", 21);
user1.printme();
