let cp=require("child_process");
console.log("tryinmg to open our");
cp.execSync("start chrome https:\\www.pepcoding.com");
console.log("opened our ");
let op=cp.execSync("node abc.js");
console.log("output "+op);