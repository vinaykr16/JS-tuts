class hello {
  world(number) {
    console.log("hello world " + number);
  }
}

class inheritClass extends hello {
  fruits() {
    console.log("Apple, banana");
  }
}

var a = new hello();
var b = new inheritClass();
// a.world(56);
b.world(86);
b.fruits();
