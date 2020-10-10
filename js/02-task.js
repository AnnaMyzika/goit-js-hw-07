const countProps = function (obj) {
  "use strict";
  // Write code under this line
  const len = Object.keys(obj).length;
  return len;
};

console.log(countProps({})); // 0

console.log(countProps({ a: 1, b: 1 })); // 2

console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5
