let fs =require("fs");
let path=require("path");
function organizeFn(dirPath)
{
    let des;
    if(dirPath==undefined)
    {
        des=process.cwd();
        // console.log("Kindly enter the path");
        return;
    }
    else
    {
        let doesExist = fs.existsSync(dirPath);
        if(doesExist)
        {
            des=path.join(__dirname,"organized_files");
            if(fs.existsSync(des)==false)
            {
                fs.mkdirSync(des);
            }
        }
        else
        {
            console.log("Kindly enter the correct path");
            return;
        }
    }
    organizehlp(dirPath,des);
}
function organizehlp(src,dest)
{
    let child = fs.readdirSync(src);
    for(let i=0; i<child.length; i++)
    {
        let childadd =path.join(src,child[i]);
        let isFile = fs.lstatSync(childadd).isFile();
        if(isFile)
        {
            console.log(child[i]);
            let getcate=getcategory(child[i]);
            console.log(child[i],"belongs to -->",getcate);
            sendFiles(childadd,dest,getcate);
        }
    }
}
function sendFiles(srcFile,dest,category)
{
    let categoryPath = path.join(dest,category);
    if(fs.existsSync(categoryPath)==false)
    {
        fs.mkdirSync(categoryPath);
    }
    let filename =path.basename(srcFile);
    let destFilePath = path.join(categoryPath,filename);
    fs.copyFileSync(srcFile,destFilePath);
    fs.unlinkSync(srcFile);
    console.log(filename,"Copied to ",category);
}
function getcategory(d)
{
    let ext = path.extname(d);
    ext = ext.slice(1);
    for(let type in types)
    {
        let ctypeArray = types[type];
        for(let i=0; i<ctypeArray.length; i++)
        {
            if(ext == ctypeArray[i])
            {
                return type;
            }
        }
    }
    return "others";
}
module.exports
{
    organizeKey : organizeFn
}