let path=require("path");
let fs=require("fs");
for(let i=1; i<=10; i++)
{
    let dirp=`Lecture-${i}`;
    fs.mkdirSync(dirp);
    fs.writeFileSync(path.join(dirp,"readme.md"),`# readme for ${dirp}`);
    fs.unlinkSync(path.join(dirp,"readme.md"));
    fs.rmdirSync(`Lecture-${i}`);
}
let ext = path.extname(path.join(__dirname,"abc.js"));
console.log(ext);
console.log(path.basename(path.join(__dirname,"abc.txt")));
console.log(path.dirname(path.join(__dirname,"abc.txt")));
