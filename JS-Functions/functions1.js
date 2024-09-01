// Functions as first-class objects

// 1. function literal
const myFunc1 = function test(desc) {
  console.log(desc);
  return 0;
};

myFunc1("function literals are simple!");
console.log(typeof myFunc1);