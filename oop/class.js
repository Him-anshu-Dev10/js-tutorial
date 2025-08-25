class user {
  constructor(username, mail, pass) {
    this.username = username;
    this.mail = mail;
    this.pass = pass;
  }
  default() {
    console.log(
      `my name is ${this.username} , my mail is ${this.mail} and pass is ${this.pass}`
    );
  }
}
let chai = new user("him", "google.com", 1254);
// console.log(chai);

// inheritence
class Teacher {
  constructor(username) {
    this.username = username;
  }
  staff() {
    console.log(`teacher name is ${this.username}`);
  }
}
class group extends Teacher {
  constructor(username, age) {
    super(username);
    this.age = age;
  }
  meth() {
    console.log(`name is ${this.username} age is ${this.age}`);
  }
}
const tea = new group("himu", 21);
tea.meth();
