let Button = document.querySelectorAll(".button");

const Body = document.querySelector("body");
Button.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "red") {
      Body.style.backgroundColor = "red";
    }
    if (e.target.id === "green") {
      Body.style.backgroundColor = "green";
    }
    if (e.target.id === "yellow") {
      Body.style.backgroundColor = "yellow";
    }
    if (e.target.id === "blue") {
      Body.style.backgroundColor = "blue";
    }
  });
});
