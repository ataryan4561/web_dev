let fs =require("fs");
let path=require("path");
function treeFn(dirPath)
{
    if(dirPath==undefined)
    {
        treehlp(process.cwd(),"");
        // console.log("Kindly enter the path");
        return;
    }
    else
    {
        let doesExist = fs.existsSync(dirPath);
        if(doesExist)
        {
            treehlp(dirPath,"");
        }
        else
        {
            console.log("Kindly enter the correct path");
            return;
        }
    }
}
function treehlp(dirPath, indent)
{
    let isFile=fs.lstatSync(dirPath).isFile();
    if(isFile==true)
    {
        let fileName =path.basename(dirPath);
        console.log(indent + "|--  " + fileName);
    }
    else
    {
        let dirName = path.basename(dirPath);
        console.log(indent+"|--- Folder --"+ dirName);
        let childrens=fs.readdirSync(dirPath);
        for(let i=0; i<childrens.length; i++)
        {
            let childpath = path.join(dirPath, childrens[i]);
            treehlp(childpath,indent + "\t");
        }
    }
}
module.exports
{
    treekey : treeFn
}