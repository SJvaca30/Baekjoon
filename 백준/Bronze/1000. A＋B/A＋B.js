const fs = require("fs");
let a = fs.readFileSync('/dev/stdin').toString().split(" ");

console.log(Number(a[0])+Number(a[1]))
