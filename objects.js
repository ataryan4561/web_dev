let cap={
    name: "Steve",
    lastname: "Rogers",
    address :{
        city: "Manhatten",
        state: "New York"
        }
        ,age : 35,
        isAvenger:true,
        movies: ["First avenger","winter soldier"],
        sayhi: function()
        {
            console.log("Cap say's Hi");
        }
};

// console.log("cap:",cap);
cap.age=36;
cap.isAvenger =false;
cap.friends=["Tony","Bruce","Peter"];
console.log('`````````````');
// console.log("cap",cap);
//delete
// delete cap.address
// delete cap.age
// console.log("cap",cap);
for(let key in cap)
{
    console.log(key,":",cap[key]);
}
let propkey