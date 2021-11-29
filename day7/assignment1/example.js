/*var*/

var ename="first name";
function changeName(){
    var ename="last name"
    console.log(ename);
};
changeName();
console.log(ename);

/* const*/

const a=5;
function cnumber(){
    const a=6;
    console.log(a)
}
cnumber();
console.log(a);

/*arrow*/

let pname=(pname)=>{
    console.log(pname);
};
pname("shyam");

/*Template*/

let firstName="Harish";
let lastName="krishna";
console.log(`name is: ${firstName} ${lastName}`);


