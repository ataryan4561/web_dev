let fs=require("fs");
let b=fs.readFileSync("abc.js");
// console.log("string"+b);
fs.openSync("abc.txt","w");
fs.writeFileSync("abc.txt","hum bahut hai");
//update
fs.appendFileSync("abc.txt"," Bhai mai ho na");
// fs.mkdirSync("merid");
// fs.writeFileSync("merid/merifile.txt"," Mera content");
// let content=fs.readdirSync("merid");
// console.log(content);
// for(let i=0; i<content.length; i++)
// {
//     console.log("file ",content[i],"is going to remove");
//     fs.unlinkSync("merid/"+content);
// }
// fs.rmdirSync("merid");
console.log(fs.existsSync("abc.txt"));
let de = fs.lstatSync(__dirname+"\\fileSystem.js");
let ans =de.isFile();
console.log(ans);
ans=de.isDirectory();
console.log(ans);
// for(let i=1; i<=10; i++)
// {
//     let dirp=`Lecture-${i}`;
//     fs.mkdirSync(dirp);
//     fs.writeFileSync(dirp+"\\"+"readme.md",`# readme for ${dirp}`);
// }
