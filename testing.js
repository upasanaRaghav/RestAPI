const f=require("fs");
const os=require("os");

console.log(os.cpus().length)
//blocking req
// f.writeFileSync("./test.txt", "Oh hi");


//non-blocking req
// f.writeFile("./test.txt", "Ohhh NO",(err)=>{}); 

// console.log("1");
// //blocking request
// const res= f.readFileSync("test.txt", "utf-8");
// console.log(res);
// console.log("3");
// console.log("3");
// console.log("3");
// console.log("3");



console.log("1");
//non-blocking request-they ALWAYS expect a callback function
const res= f.readFile("test.txt", "utf-8", (err,result)=>{
    console.log(result);
});
console.log("3");
console.log("3");
console.log("3");
console.log("3");


