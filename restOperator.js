// function with multiple parameters
const sum = (name,...args) => {
  //  console.log(args);
  let sum = 0;
  for (let i in args) {
    sum += args[i];
  }
  console.log(`hello ${name}`);
  
  console.log(sum + "<br>");
};

sum('Vinay kumar',67, 78, 90);
