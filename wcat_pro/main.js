#!/usr/bin/env node
let inputArr = process.argv.slice(2);
let fs =require("fs");
let path=require("path");
for(let i=0; i<inputArr.length; i++)
{
    console.log(inputArr[i]);
}
let command = inputArr[0];
let path = inputArr[1];
switch(command)
{
    case (inputArr.length==2) && path:
        break;
    case path=="-n":
        break;
    case path=="-s":
        break;
    case path=="-b":
        break;
}