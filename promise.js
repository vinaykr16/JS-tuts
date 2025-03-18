//feature of ES6
function prom(complete) {
  return new Promise((resolve, reject) => {
    //if promise is fullfilled, resolve will be called else reject will be called
    if (complete) {
      resolve("value is true");
    } else {
      reject("failed");
    }
  });
}

console.log(prom(true));
