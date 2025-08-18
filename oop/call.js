// function setName(username) {
//   this.username = username;
//   console.log("called");
// }
// function componyDetails(username, mail, pass) {
//   setName(username);
//   this.mail = mail;
//   this.pass = pass;
// }
// const himu = new componyDetails("himu", "@google.com", 123);
// console.log(himu);

// in this code fn calling another fn but the code is not working because of function execution context

//for solving this we use .call method
// function setName(username) {
//   this.username = username;
//   console.log("called");
//}
// function componyDetails(username, mail, pass) {
//   setName.call(this, username);
//   this.mail = mail;
//   this.pass = pass;
// }
// const himu = new componyDetails("himu", "@google.com", 123);
// console.log(himu);

function Hi() {
  console.log(`my email is${this.email}`);
}

let obj = {
  email: "google.com",
};
Hi.call(obj);
