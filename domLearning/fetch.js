async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData();

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // batana zaroori hai ki hum JSON bhej rahe hain
  },
  body: JSON.stringify({
    title: "Hello",
    body: "This is my first post",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Created:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    return response.json(); // response ko JSON me convert karna (async)
  })
  .then((data) => {
    console.log(data); // yahan data milega
  })
  .catch((error) => {
    console.log("Error:", error);
  });

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    return response.json(); // response ko JSON me convert karna (async)
  })
  .then((data) => {
    console.log(data); // yahan data milega
  })
  .catch((error) => {
    console.log("Error:", error);
  });
