let array=[1,2,3,4,5];
console.log(array);
console.log(array.length);
let i=0; 
while(i<array.length)
{
    console.log("elem at idx",i,"is",array[i]);
    i++;
}
array.push("last value");
array.unshift("first value");
console.log(array);
console.log("```````````````");
array.shift();
array.pop();
console.log(":~''''''''''''''"); 
console.log(array);
let a=array.slice(2);
console.log(a);
console.log(array);
array.splice(2,3);
console.log(array);