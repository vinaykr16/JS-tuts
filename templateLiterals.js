// concatenate two strings in a different way according to ES 6
var s = "vinay";
var f = `${s} kumar`;
var l = `kumar${s}`;

function name(f, l) {
  var name = `${f} ${l}`;
  return name;
}
console.log(name("vinay", "kumar"));
