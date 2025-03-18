// assigning array values to multiple variables
let arr = ["name", "89", , "Json object"];
// if array value is not ProgressEvent, then default value can be set
let [name, ageString, age = 6, jsonData] = arr;
console.log(age);
