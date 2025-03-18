let name = "vinay";
let obj = {
  //if object property and its value is same then you can use only property
  // name: name,
  name,
};
console.log(obj);
var propertyName = "age";
let obj2 = {
  [propertyName]: 89,
};
console.log(obj2);
var obj3 = {
  [propertyName + "ofPerson"]: 89,
  detail() {
    return `${this.propertyName} is student`
  },
};
console.log(obj3.detail());
