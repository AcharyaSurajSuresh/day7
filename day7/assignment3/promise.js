let completed=true;
let service=new Promise(function(resolve,reject)
{
    if(completed){
        resolve("vechile services");
    }
    else{
        reject("Low on staff Sir");
    }
});
service.then((message)=>{
    console.log(message);
});

let ccompleted=false;
let sservice=new Promise(function(resolve,reject)
{
    if(ccompleted){
        resolve("vechile services");
    }
    else{
        reject("Low on staff Sir");
    }
});
sservice.then((message)=>{
    console.log(message);
});


/*service.then(
    (message)=>console.log(message)
    ).catch(reason=>console.log(reason))
    .finally(()=>console.log("Finally is working"));
    */

sservice.then(
    (message)=>console.log(message)
    ).catch(reason=>console.log(reason))
    .finally(()=>console.log("Finally is working"));
    