#!/usr/bin/env node
let inputArr = process.argv.slice(2);
let fs =require("fs");
let path=require("path");
let helpo=require("./command/help");
let organizeo=require("./command/organize");
let treeo=require("./command/tree");
console.log(inputArr);
let command = inputArr[0];
let types ={
    media: ["mp4","mkv"],
    archives: ['zip','7z','rar','tar','gz','ar','iso','xz'],
    documents: ['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps', 'tex'],
    app: ['exe','dmg','pkg','deb']
}
switch(command)
{
    case "tree":
        treeo.treekey(inputArr[1]);
        break;
    case "organize":
        organizeo.organizeKey(inputArr[1]);
        break;
    case "help":
        helpo.helpKey();
        break;
    default:
        console.log("Please Input Right command");
        break;
}


