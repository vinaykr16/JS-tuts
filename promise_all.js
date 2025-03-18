let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Second promise has resolved");
    resolve(20);
  }, 2 * 1000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Third promise has resolved");
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1, p2, p3])
  .then((result) => {
    console.log(`Results: ${result}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
